const express = require("express");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
require("./Conn/conn");
const model =require("./Model/model");

//env configuration
const port = process.env.PORT;
const EMAIL=process.env.EMAIL;
const TEMPASS=process.env.TEMPASS;

app.use(cors());
app.use(express.json());

app.post("/signup", async (req, res) => {
  const { firstName, surName, email, password, gender, date, month, year } =
    req.body;

  if (
    firstName !== "" &&
    surName !== "" &&
    email &&
    password &&
    gender &&
    date &&
    month &&
    year
  ) {
    let emailcheck = await model.findOne({ email: email });

    if (!emailcheck) {
      let passwordd = await bcrypt.hash(password, 10);
      let code = Math.floor(Math.random() * 1000000);
      let resettoken = jwt.sign({ email: email }, "harshbadgujar", {
        expiresIn: 300,
      });
      await model.create({
        firstName,
        surName,
        email,
        password: passwordd,
        gender,
        date,
        month,
        year,
        code,
      });

      let fun = async () => {
        const transpoter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user:EMAIL,
            pass:TEMPASS ,
          },
        });

        const mailoptions = {
          from: EMAIL,
          to: email,
          subject: "confrom-code",
          text: `${code}`,
        };
        await transpoter.sendMail(mailoptions);
      };

      fun().then(
        res.json({
          status: "Ok",
          message: "Check mail box..",
          resettoken: resettoken,
        })
      );
    } else {
      res.json({ status: "Error", message: "Email alredy used" });
    }
  } else {
    res.json({ status: "Error", message: "Error creating account" });
  }
});

app.put("/conformmail", async (req, res) => {
  let { code, token } = req.body;
  let codeNumber = Number(code);
  let data = jwt.verify(token, "harshbadgujar");
  let data01 = await model.findOne({ email: data.email });
  if (data01.email == data.email) {
    if (codeNumber === data01.code) {
      await model.updateOne({ email: data01.email, $unset: { code: 1 } });
      res.json({ status: "ok", message: "Account Created Successfully" });
    } else {
      res.json({ status: "Error", message: "Invalid code" });
    }
  } else {
    res.json({ status: "Error", message: "Take long time ,Please Try again" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  let result = await model.findOne({ email: email });
  if (result) {
    let checkpassword = await bcrypt.compare(password,result.password);
    console.log(checkpassword);
    if (checkpassword === true) {
      let user_ = jwt.sign({ email: email }, "hardyalsinghdaudsar", {
        expiresIn: 24 * 60 * 60,
      });
      res.json({ status: "ok", user_ });
    } else {
      res.json({ message: "check your credentials" });
    }
  } else {
    res.json({ message: "check your credentials" });
  }
});

app.put("/passreset_email", async (req, res) => {
  const { email } = req.body;
  console.log(email)
  let result = await model.findOne({ email: email });

  if (result) {
    let code = Math.floor(Math.random() * 1000000);
    let resettoken = jwt.sign({ email: email }, "harshbadgujar", {
      expiresIn: 300,
    });
    let fun = async () => {
        const transpoter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: EMAIL,
            pass: TEMPASS,
          },
        });

        const mailoptions = {
          from: EMAIL,
          to: email,
          subject: "confrom-code",
          text: `${code}`,
        };
        await transpoter.sendMail(mailoptions);
      };

      fun().then(
        await model.updateOne({email:email,$set:{code:code}}),
        res.json({
          status: "ok",
          message: "Check mail box..",
          resettoken: resettoken,
          firstName:result.firstName,
          surName:result.surName
        }))
  }else{
    res.json({message:"Please try again"})
  }
});

app.put("/setpass",async(req,res)=>{
  const {data,token} =req.body;
  console.log(data)
  if(token){
    let result =jwt.verify(token,"harshbadgujar");
    let user=await model.findOne({email:result.email})
    
    if(user.code==data.code){
      let newPassword= await bcrypt.hash(data.newPassword,10);
      console.log(newPassword);
    await model.updateOne({email:user.email},{$set:{password:newPassword}});
    res.json({status:"ok",message:"Password updated successfully"})
    }else{
      res.json({message:"invalid code"})
    }
  }else{
    res.json({message:"Please try again"})
  }
  })
app.listen(port, () => console.log(`server started on port ${port}`));
