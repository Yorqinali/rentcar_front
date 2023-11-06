import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./brands.css";
import audi from "./images/audi.jpg";
import BMW from "./images/BMW.jpg";
import camaro from "./images/camaro.jpg";
import kia from "./images/kia.webp";
import kodiaq from "./images/kodiaq.jpg";
import lambo from "./images/lambo.jpg";
import mersedes from "./images/mersedes.jpg";
import porshe from "./images/porshe.jpg";
import roys from "./images/r-roys.jpg";
import tuscon from "./images/tuscon.jpg";

const Brands = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
    },
    miniDesktop: {
      breakpoint: { max: 1200, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div >
    <Carousel responsive={responsive} className="brand-container"  infinite={true}>
      <div className="brand-items">
        <img className="brand-img" src={audi} alt="img" />
      <h3 className="brand-name">audi</h3>
      </div>
      <div className="brand-items">
        <img className="brand-img" src={BMW} alt="img" />
      <h3 className="brand-name">BMW</h3>
      </div>
      <div className="brand-items">
        <img className="brand-img" src={camaro} alt="img" />
      <h3 className="brand-name">Chevrolet</h3>
      </div>
      <div className="brand-items">
        <img className="brand-img" src={kia} alt="img" />
      <h3 className="brand-name">KIA</h3>
      </div>
      <div className="brand-items">
        <img className="brand-img" src={kodiaq} alt="img" />
      <h3 className="brand-name">skoda</h3>
      </div>
      <div className="brand-items">
        <img className="brand-img" src={lambo} alt="img" />
      <h3 className="brand-name">lamborghini</h3>
      </div>
      <div className="brand-items">
        <img className="brand-img" src={mersedes} alt="img" />
      <h3 className="brand-name">mersedes benz</h3>
      </div>
      <div className="brand-items">
        <img className="brand-img" src={porshe} alt="img" />
      <h3 className="brand-name">porsche</h3>
      </div>
      <div className="brand-items">
        <img className="brand-img" src={roys} alt="img" />
      <h3 className="brand-name">rolls roys</h3>
      </div>
      <div className="brand-items">
        <img className="brand-img" src={tuscon} alt="img" />
      <h3 className="brand-name">hyundai</h3>
      </div>
    </Carousel>
    </div>
  );
};

export default Brands;
