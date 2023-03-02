import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}

const TopSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 370);
  const y1 = useParallax(scrollYProgress, 300);
  const y2 = useParallax(scrollYProgress, 200);
  const y3 = useParallax(scrollYProgress, 50);

  return (
    <header className="main-header">
      <div className="layers">
        <motion.div className="layer__header" style={{ translateY: y }}>
          <div className="layers__caption">Welcome to Parallax</div>
          <div className="layers__title">Fairy Forest</div>
        </motion.div>
        <motion.div
          style={{ translateY: y1 }}
          className="layer layers__base"
        ></motion.div>
        <motion.div
          style={{ translateY: y2 }}
          className="layer layers__middle"
        ></motion.div>
        <motion.div
          style={{ translateY: y3 }}
          className="layer layers__front"
        ></motion.div>
      </div>
    </header>
  );
};
export default TopSection;
