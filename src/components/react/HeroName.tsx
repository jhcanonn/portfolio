import { motion } from 'framer-motion';

const HeroName = () => (
  <motion.h2
    className="text-[3.2rem] md:text-7xl font-extrabold leading-[3.5rem]"
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
    Hi, I'm <br className="block sm:hidden" />{' '}
    <span className="hero-text">Jair Cañon</span>
  </motion.h2>
);

export default HeroName;
