import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
const Dashboard = () => {
  const [formData, setFormData] = useState({
    car_name: "",
    rent_price: 0,
    fuel: "",
    motor_size: 0,
    color: "",
    image: "",
    brand: "",
    phone: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5050/cars/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/list");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="dashboard">
      <h1 className="dash-h1">add car</h1>
      <form onSubmit={handleSubmit}>
        <div className="login-inputs">
          <label className="label" htmlFor="car_name">
            Car name
          </label>
          <br />
          <input
            className="sign-input"
            type="text"
            id="name"
            name="car_name"
            placeholder="car_name"
            value={formData.car_name}
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="login-inputs">
          <label className="label" htmlFor="rent_price">
            rent price
          </label>
          <br />
          <input
            className="sign-input"
            type="number"
            id="rent_price"
            name="rent_price"
            placeholder="rent_price"
            value={formData.rent_price}
            onChange={handleChange}
          />
          <br />
        </div>
        <div className="login-inputs">
          <label className="label" htmlFor="fuel">
            fuel
          </label>
          <br />
          <input
            className="sign-input"
            type="text"
            id="fuel"
            name="fuel"
            placeholder="fuel"
            value={formData.fuel}
            onChange={handleChange}
          />
          <br />
        </div>
        <div className="login-inputs">
          <label className="label" htmlFor="motor_size">
            motor_size
          </label>
          <br />
          <input
            className="sign-input"
            type="number"
            id="motor_size"
            name="motor_size"
            placeholder="motor_size"
            value={formData.motor_size}
            onChange={handleChange}
          />
          <br />
        </div>
        <div className="login-inputs">
          <label className="label" htmlFor="color">
            Color
          </label>
          <br />
          <input
            className="sign-input"
            type="text"
            id="color"
            name="color"
            placeholder="color"
            value={formData.color}
            onChange={handleChange}
          />
          <br />
        </div>
        <div className="login-inputs">
          <label className="label" htmlFor="brand">
            brand
          </label>
          <br />
          <input
            className="sign-input"
            type="text"
            id="brand"
            name="brand"
            placeholder="brand"
            value={formData.brand}
            onChange={handleChange}
          />
          <br />
        </div>
        <div className="login-inputs">
          <label className="label" htmlFor="phone">
            phone
          </label>
          <br />
          <input
            className="sign-input"
            type="text"
            id="phone"
            name="phone"
            placeholder="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <br />
        </div>
        <div className="login-inputs">
          <label className="label" htmlFor="image">
            image
          </label>
          <br />
          <input
            className="sign-input"
            type="file"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
          <br />
        </div>

        <button type="submit" className="login-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
