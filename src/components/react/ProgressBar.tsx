import { motion, useScroll, useSpring } from 'framer-motion';

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="progress-bar fixed top-15 left-0 right-0 h-1 origin-[0%] z-20"
      style={{ scaleX }}
    />
  );
};

export default ProgressBar;
