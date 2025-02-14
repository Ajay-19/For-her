import { useState, useEffect, useRef } from "react";

const images = [
  "/images/cimage4.jpeg",
  "/images/cimage1.jpeg",
  "/images/cimage2.jpeg",
  "/images/cimage3.jpeg",
];

const ImageScroller = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null); // Reference for auto-slide interval

  // Go to next image
  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    intervalRef.current = setInterval(goToNext, 3000); // Auto-slide every 3 seconds

    return () => {
      clearInterval(intervalRef.current); // Clean up on component unmount
    };
  }, []);

  // Handle manual navigation by dot click
  const handleDotClick = (idx) => {
    setIndex(idx);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Image container with smooth transition */}
      <div
        className="flex w-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${(index + 1) * 100}vw)`,
          width: `${(images.length + 1) * 100}vw`, // Make sure to consider the duplicated image width
        }}
      >
        {[...images, images[0]].map((image, idx) => (
          <div
            key={idx}
            className="w-screen h-[150vh] overflow-hidden"
          >
            <img
              src={image}
              alt={`Image ${idx + 1}`}
              className="w-full h-full object-cover" // Ensure image fits within the container without cropping
            />
          </div>
        ))}
      </div>

      {/* Image Indicators (Dots) */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
              index === idx ? "bg-blue-600" : "bg-gray-400"
            } hover:bg-blue-500`}
            onClick={() => handleDotClick(idx)} // Manual navigation by clicking dots
          />
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;
