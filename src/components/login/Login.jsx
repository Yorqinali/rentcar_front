import { useState } from "react";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import Header2 from "../header2/header2";
import loginImg from "./login-img.png";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({
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

    fetch("http://localhost:5050/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <>
      <Header2 />
      <div className="login">
        <div className="login-countainer">
          <h1 className="login-h1">Log in</h1>
          <p className="login-p">Enter the required information to register</p>
          <form onSubmit={handleSubmit}>
            <div className="login-inputs">
              <label className="label" htmlFor="email">
                Email
              </label>
              <br />
              <input
                className="sign-input"
                type="email"
                id="name"
                name="email"
                placeholder="lorem@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
              <br />
            </div>

            <div className="login-inputs">
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

            <button type="submit" className="login-btn">
              Submit
            </button>
          </form>
        </div>
        <div className="login-img">
          <img src={loginImg} alt="img" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
