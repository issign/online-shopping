import { useState, useEffect } from "react";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Hero() {
  const [images, setImages] = useState([]);

  const getHeroImages = async () => {
    const res = await axios.get("http://localhost:3001/products");
    setImages(res.data);
  };

  useEffect(() => {
    getHeroImages();
  }, []);

  const renderedImages = images.map((img) => {
    return <img src={img.src} alt={img.alt} key={img.id} className=""/>;
  });

  return (
    <div className="w-full h-full pt-[9rem] flex">
      {renderedImages}
      <div>
        <IoIosArrowBack />
        <IoIosArrowForward />
      </div>
    </div>
  );
}

export default Hero;
