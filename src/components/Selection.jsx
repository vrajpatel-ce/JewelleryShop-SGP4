import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export function Selection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const selections = [
    { src: "/images/selection_image/unique.png", title: "Unique" },
    { src: "/images/selection_image/luxury.png", title: "Luxury" },
    { src: "/images/selection_image/asthetic.png", title: "Aesthetic" },
    { src: "/images/selection_image/love.png", title: "Love" },
    { src: "/images/selection_image/Diamond.png", title: "Diamond" },
    { src: "/images/selection_image/customize.png", title: "Customize" },
    { src: "/images/selection_image/old_type.png", title: "Old Type" },
  ];

  return (
    <div ref={sectionRef} className="flex justify-center h-[60vh] bg-gray-100">
      <div className="flex flex-col items-center space-y-6 mt-25">
        {/* Animated Heading */}
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-extrabold text-gray-800 underline decoration-4 decoration-gray-500 font-serif tracking-wide"
        >
          Our Unique Selections
        </motion.h2>

        <div className="flex space-x-8">
          {selections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut", type: "spring", bounce: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full shadow-lg bg-white flex items-center justify-center overflow-hidden">
                <img src={item.src} alt={item.title} className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="mt-2 text-lg md:text-xl font-semibold text-gray-700 font-serif tracking-wide">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
