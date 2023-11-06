import { Link } from "react-router-dom";
import "./footer.css";
import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import linkedin from "./images/linkedin.png";
import youtube from "./images/youtube.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="title">
        <h4>About Us</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor
          sit amet...
        </p>
      </div>
      <div className="about">
        <h4>About Us</h4>
        <hr />
        <p>
          <a className="footer-a" href="tel:+998999999999">+998999999999</a>
          <br />
          <br />
          <a className="footer-a" href="tel:+998944444444">+998944444444</a>
          <br />
        
        </p>
        <div className="social-media">
         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" /> </a>
         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /> </a>
         <a href="https://uz.linkedin.com" target="_blank" rel="noopener noreferrer"> <img src={linkedin} alt="linkedin" /> </a>
         <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"> <img src={youtube} alt="youtube" /> </a>
        </div>
      </div>
      <div className="news">
        <h4>News</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <Link className="logo" to={"/"}>
          <div className="logo">
          <h1 className="logos">
            <span className="logospan">R</span>ent
            <span className="logospan">C</span>ar
          </h1>
        </div></Link>
      </div>
      <div className="bottom">
        <p>© RentCar - 2023 | All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
