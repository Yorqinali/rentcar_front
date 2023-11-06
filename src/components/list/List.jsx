import { useState, useEffect } from "react";
import Header2 from "../header2/header2";
import Footer from "../Footer/Footer";
import "./list.css";

const List = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/cars", {
      method: "GET",
      mode: "cors", // Mode sozlashi
    })
      .then((response) => response.json())
      .then((data) => {
        setCars(data); // Olingan ma'lumotlarni component holatiga saqlash
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="list">
      <Header2 />
      <div className="list-container">
        <ul className="list-ul">
          {cars.map((car) => (
            <li className="list-list" key={car.cars_id}>
              <div className="list-img-cont">
                <img src={car.image} alt="img" />
              </div>
              <div className="list-text-cont">
                <div className="text-cont">
              <h2 className="carname">Name: {car.car_name}</h2>
              <p className="rentprice">Rent-price: {car.rent_price}$</p>
              <p className="fuel">Fuel: {car.fuel}</p>
              <p className="fuel">Motor_size: {car.motor_size}l</p>
              <p className="color">Color: {car.color}</p>
              <p className="brand">Brand: {car.brand}</p>
              <p className="brand">Phone: {car.phone}</p>
              </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default List;
