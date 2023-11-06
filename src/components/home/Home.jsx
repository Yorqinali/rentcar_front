import "../../App.css";
import Brands from "../Brands/Brands";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Partners from "../Partners/Partners";
import OurServices from "../ourServices/OurServices";


function Home() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="header-container">
          <Navbar />
          <Hero />
        </div>
      </header>
      <div className="part">
        <h2 className="partners">
          <span className="brand-span">CAR</span> BRANDS
        </h2>
      </div>
      <Brands />
      <OurServices />
      <div className="part">
        <h2 className="partners">
          <span className="part-span">P</span> artners
        </h2>
      </div>
      <Partners />
      <Footer />
    </>
  );
}

export default Home;
