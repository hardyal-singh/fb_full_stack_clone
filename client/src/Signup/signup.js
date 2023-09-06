import React, { useState, useEffect } from "react";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./signup.css";

export default function Signup() {
  const navigate = useNavigate();

  useEffect(() => {
    let token = Cookie.get("user_");
    if (token) {
      navigate("/");
    }
  });
  const dates = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const years = [
    1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
  ];

  let date = dates.map((date, index) => {
    return <option key={index}>{date}</option>;
  });

  let month = months.map((month, index) => {
    return <option key={index}>{month}</option>;
  });

  let year = years.map((year, index) => {
    return <option key={index}>{year}</option>;
  });

  const [user, setUser] = useState({});
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setUser((valuee) => ({ ...valuee, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let respone = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
    let serverData = await respone.json();

    if (serverData.status === "Ok") {
      let inFifteenMinutes = new Date(new Date().getTime() + 5 * 60 * 1000);
      Cookie.set("conformemail", serverData.resettoken, {
        expires: inFifteenMinutes,
      });
      alert(serverData.message);
      navigate("/conformmail");
    } else {
      alert(serverData.message);
    }
  };
  return (
    <>
      <div className="signupp_container">
        <div className="signup-heading">
          <h1 className="signup-heading-01">facebook</h1>
        </div>
        <div className="signup-form-page">
          <div className="signup-form-top">
            <h1>Create a new account </h1>
            <p>It's quick easy.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-top-input">
              <div>
                <input
                  type="text"
                  value={user.firstName}
                  name="firstName"
                  placeholder="First name"
                  className="signup-form-input"
                  minLength="2"
                  required
                  onChange={handleChange}
                />
                <input
                  type="text"
                  minLength="2"
                  value={user.surName}
                  name="surName"
                  placeholder="Surname"
                  className="signup-form-input"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  value={user.email}
                  name="email"
                  placeholder="Moblie number or email address"
                  className="signup-form-input form-email"
                  required
                  onChange={handleChange}
                />
                <input
                  type="text"
                  value={user.password}
                  name="password"
                  placeholder="New password"
                  className="signup-form-input form-password"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="dob">
              <p className="inputs-heading">Date of birth</p>
              <div className="dob-date">
                <select name="date" value={user.date} onChange={handleChange}>
                  {date}
                </select>
                <select name="month" value={user.month} onChange={handleChange}>
                  {month}
                </select>
                <select name="year" value={user.year} onChange={handleChange}>
                  {year}
                </select>
              </div>
            </div>
            <div>
              <p className="inputs-heading">Gender</p>
              <div className="form-radio">
                <div className="form-radio-buttons">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    onChange={handleChange}
                  />
                  <label forhtml="male">Male</label>
                </div>
                <div className="form-radio-buttons">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    onChange={handleChange}
                  />
                  <label forhtml="female">Female</label>
                </div>
                <div className="form-radio-buttons">
                  <input
                    type="radio"
                    name="gender"
                    id="custom"
                    value="custom"
                    onChange={handleChange}
                  />
                  <label forhtml="custom">Custom</label>
                </div>
              </div>
            </div>
            <div className="form-text">
              <p>
                People who use our service may have uploaded your contact
                information to Facebook.{" "}
                <a href="https://www.facebook.com/help/637205020878504">
                  Learn more.
                </a>
              </p>
              <p>
                By clicking Sign Up, you agree to our{" "}
                <a href="https://www.facebook.com/legal/terms/update">Terms</a>,{" "}
                <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0">
                  Cookies Policy
                </a>
                .You may receive SMS notifications from us and can opt out at
                any time.
              </p>
            </div>
            <div className="signup-bottom-button">
              <input type="submit" value={"Sign Up"} />
              <br></br>
              <a href="/login">Already have a account?</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
