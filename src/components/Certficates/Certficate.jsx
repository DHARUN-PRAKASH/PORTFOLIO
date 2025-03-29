import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';

const Certficate = () => {
  return (
    <div style={{ backgroundColor: "#262626", padding: "1.5rem 0" }}>
      {/* Scroll Down Section */}

      
      {/* Title Section */}
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-white text-4xl font-bold uppercase">Certificates</h1>
      </div>

      <div className="flex h-16 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>

      {/* Horizontal Scroll Carousel */}
      <HorizontalScrollCarousel />

      {/* Scroll Up Section */}
      <div className="flex h-16 items-center justify-center mt-8">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="relative h-[400px] w-[400px] overflow-hidden rounded-lg"
      style={{ backgroundColor: "#262626" }}
    >
      {/* Certificate Image */}
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "contain", // Ensures the full image is displayed
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", // Prevents repeating
        }}
        className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
      ></div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 z-10 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default Certficate;

const cards = [
  {
    url: image1,
    id: 1,
  },
  {
    url: image2,
    id: 2,
  },
  {
    url: image1,
    id: 3,
  },
  {
    url: image4,
    id: 4,
  },
  {
    url: image5,
    id: 5,
  },
  {
    url: image6,
    id: 6,
  },
  {
    url: image1,
    id: 7,
  },
];
