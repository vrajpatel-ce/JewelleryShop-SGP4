import { useEffect, useState } from "react";

export function ImageSlider() {
  const images = ["/images/home_images/image1.jpg", "/images/home_images/image2.jpg", "/images/home_images/image3.jpg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh]">
      <img
        src={images[index]}
        alt="Jewelry"
        className="w-full h-full object-cover transition-opacity duration-700 ease-in-out rounded-lg"
      />

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
              i === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
