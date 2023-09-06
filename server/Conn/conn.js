let conn=process.env.CONN;
const mongoose=require('mongoose')

mongoose.connect(conn).then(()=>{console.log("database connection established")});