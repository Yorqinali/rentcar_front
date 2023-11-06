import { useState } from "react";
import Footer from "../Footer/Footer";
import Header2 from "../header2/header2";
import "./signup.css";
import loginImg from "./login-img.png";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5050/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Header2 />
      <div className="signup">
        <div className="sign-countainer">
          <h1 className="signup-h1">Sign up</h1>
          <p className="signup-p">Enter the required information to register</p>
          <form onSubmit={handleSubmit}>
            <div className="sign-inputs">
              <label className="label" htmlFor="uname">
                User Name
              </label>
              <br />
              <input
                className="sign-input"
                type="text"
                id="username"
                name="username"
                placeholder="Lorem ipsum"
                value={formData.username}
                onChange={handleChange}
              />
              <br />
            </div>

            <div className="sign-inputs">
              <label className="label" htmlFor="email">
                Email
              </label>
              <br />
              <input
                className="sign-input"
                type="email"
                id="pnumber"
                name="email"
                placeholder="lorem@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
              <br />
            </div>

            <div className="sign-inputs">
              <label className="label" htmlFor="password">
                Password
              </label>
              <br />
              <input
                className="sign-input"
                type="password"
                id="password"
                name="password"
                placeholder="*****************"
                value={formData.password}
                onChange={handleChange}
              />
              <br />
            </div>

            <button type="submit" className="signup-btn">
              Submit
            </button>
          </form>
        </div>
        <div className="sign-img">
          <img src={loginImg} alt="img" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
