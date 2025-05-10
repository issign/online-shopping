import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Hero() {
  return (
    <div className="h-full flex justify-center">
      <div>
        <IoIosArrowBack />
        <IoIosArrowForward />
      </div>
      <img src={image1} alt="image1" className="h-3/4" />
      <img src={image2} alt="image2" className="h-3/4" />
      <img src={image3} alt="image3" className="h-3/4" />
      <img src={image4} alt="image4" className="h-3/4" />
    </div>
  );
}

export default Hero;
