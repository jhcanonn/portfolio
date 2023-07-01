import { Direction } from '@models/global';
import { fadeIn } from '@utils/motion';
import { motion } from 'framer-motion';
import cx from 'classnames';

const SectionTitle = ({
  subtitle,
  title,
  isCenter,
  direction,
}: {
  subtitle: string;
  title: string;
  isCenter?: boolean;
  direction?: Direction;
}) => (
  <motion.div
    className={cx('flex flex-col', { 'items-center': isCenter })}
    variants={fadeIn(direction ?? Direction.RIGHT)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
  >
    <p className="uppercase font-bold text-md md:text-xl">{subtitle}</p>
    <h2 className="text-4xl md:text-5xl font-extrabold">{title}</h2>
  </motion.div>
);

export default SectionTitle;
