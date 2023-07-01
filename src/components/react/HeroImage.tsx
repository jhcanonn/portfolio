import { motion } from 'framer-motion';

const HeroImage = () => (
  <motion.img
    src="/images/jair-canon.png"
    alt="jair"
    className="hero-img"
    variants={{
      pulse: {
        scaleX: [1, 1.05, 1],
        scaleY: [1, 1.05, 1],
        transition: {
          duration: 1,
        },
      },
    }}
    animate="pulse"
  />
);

export default HeroImage;
