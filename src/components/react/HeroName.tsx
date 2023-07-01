import { motion } from 'framer-motion';

const HeroName = () => (
  <motion.h2
    className="text-[3.4rem] md:text-7xl font-extrabold"
    variants={{
      rotation: {
        rotateX: [0, -90, 0],
        transition: {
          duration: 1,
        },
      },
    }}
    animate="rotation"
  >
    Hi, I'm <span className="hero-text">Jair Cañon</span>
  </motion.h2>
);

export default HeroName;
