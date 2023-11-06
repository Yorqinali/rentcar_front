import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./partners.css";
import Link1 from "./images/Link1.png";
import Link2 from "./images/Link2.png";
import Link3 from "./images/Link3.png";
import Link4 from "./images/Link4.png";

function Partners() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
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
    <Carousel responsive={responsive} className="carousel">
      <div className="carousel-items">
        <img className="carousel-img1" src={Link1} alt="img" />
      </div>
      <div className="carousel-items">
        <img className="carousel-img2" src={Link2} alt="img" />
      </div>
      <div className="carousel-items">
        <img className="carousel-img3" src={Link3} alt="img" />
      </div>
      <div className="carousel-items">
        <img className="carousel-img4" src={Link4} alt="img" />
      </div>
      <div className="carousel-items">
        <img className="carousel-img1" src={Link1} alt="img" />
      </div>
      <div className="carousel-items">
        <img className="carousel-img2" src={Link2} alt="img" />
      </div>
      <div className="carousel-items">
        <img className="carousel-img3" src={Link3} alt="img" />
      </div>
    </Carousel>
  );
}

export default Partners;
