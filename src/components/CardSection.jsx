import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export function CardSection() {
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
  
    const cards = [
      { src: "/images/card_section/tereditional.jpg", alt: "Traditional Jewellery", animation: { rotateX: 90 } },
      { src: "/images/card_section/western.jpg", alt: "Western Jewellery", animation: { rotateX: -90 } },
      { src: "/images/card_section/card_men.jpeg", alt: "Masculine Men", animation: { rotateY: 90 } },
    ];
  
    return (
      <div ref={sectionRef} className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-10">
        <h2 className="text-4xl font-bold font-serif text-gray-800 mb-8 border-b-4 border-gray-400 pb-2">Explore Our Collections</h2>
        <div className="grid grid-cols-2 gap-6 w-full max-w-6xl">
          <div className="flex flex-col gap-6 w-full">
            {cards.slice(0, 2).map((card, index) => (
              <motion.div
                key={index}
                initial={{ ...card.animation, opacity: 0 }}
                animate={isVisible ? { rotateX: 0, opacity: 1 } : { ...card.animation, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                className="relative bg-white shadow-lg cursor-pointer rounded-xl h-[43.5vh] flex items-center justify-center overflow-hidden"
              >
                <img src={card.src} alt={card.alt} className="w-full h-full object-cover rounded-xl" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white text-3xl md:text-3xl font-bold tracking-wide font-serif">{card.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ rotateY: 90, opacity: 0 }}
            animate={isVisible ? { rotateY: 0, opacity: 1 } : { rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative bg-white shadow-lg cursor-pointer rounded-xl flex items-center justify-center h-[90vh] overflow-hidden"
          >
            <img src={cards[2].src} alt={cards[2].alt} className="w-full h-full object-cover rounded-xl" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <span className="text-white text-4xl md:text-4xl font-bold tracking-wide font-serif">{cards[2].alt}</span>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
  