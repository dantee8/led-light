import React, { useEffect, useState } from "react";
import left from "../../public/left.png";
import right from "../../public/right-arrow.png";

const Carusel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://artshow-lighting.com/image/cache/catalog/other products/400W LED Moving Head BSW (1)-1140x380.jpg",
    "https://artshow-lighting.com/image/cache/catalog/follow spot/600W LED FOLLOW SPOT (3)-1140x380.jpg",
    "https://artshow-lighting.com/image/cache/catalog/other products/18x15w led dmx bar (7)-1140x380.jpg",
    "https://artshow-lighting.com/image/cache/catalog/other products/12x40W LED WASH ZOOM MOVING HEAD-500x500-1140x380.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);
  const handleImageLeft = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleImageRight = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="h-[400px] border-[1px] rounded shadow relative">
      <img
        onClick={handleImageLeft}
        className="w-20 absolute top-[30%] cursor-pointer"
        src={left}
        alt="Previous"
      />
      <img
        className="absolute ml-28"
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        key={images[currentImageIndex]}
      />
      <img
        onClick={handleImageRight}
        className="w-11 absolute top-[35%] right-0 mr-4 cursor-pointer"
        src={right}
        alt="Next"
      />
    </div>
  );
};

export default Carusel;
