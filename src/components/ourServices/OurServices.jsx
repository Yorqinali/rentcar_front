import "./ourServices.css";
import services1 from "./images/services1.png"
import services2 from "./images/services2.png"
import services3 from "./images/services3.png"
import services4 from "./images/services4.png"

function OurServices() {
  return (
    <div className="ourservices">
      <h1 className="ourservices-h1">Our services</h1>
      <p className="ourservices-p">Additional services</p>
      <div className="ourservices-img-cont">
        <div className="ourservices-img-titles1">
        <img className="ourservices-img1" src={services1} alt="img" />
        <p className="ourservices-img-p1">TIRE AND WHEEL</p>
        </div>
        <div className="ourservices-img-titles2">
        <img className="ourservices-img2" src={services2} alt="img" />
        <p className="ourservices-img-p2">BRAKE REPAIR</p>
        </div>
        <div className="ourservices-img-titles1">
        <img className="ourservices-img1" src={services3} alt="img" />
        <p className="ourservices-img-p1">LUBE, OIL AND FILTERS</p>
        </div>
        <div className="ourservices-img-titles2 ">
        <img className="ourservices-img2" src={services4} alt="img" />
        <p className="ourservices-img-p2">ENGINE DIAGNOSTICS</p>

        </div>
      </div>
    </div>
  );
}

export default OurServices;
