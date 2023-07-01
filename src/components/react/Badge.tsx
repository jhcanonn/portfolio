import { Direction } from '@models/global';
import { fadeIn } from '@utils/motion';
import { motion } from 'framer-motion';
import cx from 'classnames';
import '@styles/badge.css';

type Props = {
  color: string;
  title: string;
  source: string;
  size: string;
  index: number;
  rounded?: boolean;
};

const Badge = ({ color, title, source, size, index, rounded }: Props) => (
  <motion.div
    className="flex flex-col items-center relative w-[7.4rem] md:w-32"
    variants={fadeIn(Direction.DOWN, 'spring', 0.25, index * 0.1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
  >
    <div className={`badge ${color}`}>
      <div className="circle flex justify-center items-center">
        <img
          src={source}
          alt={`badge-${title.toLowerCase()}`}
          width={size}
          height={size}
          className={cx({ 'rounded-lg': rounded })}
        />
      </div>
    </div>
    <div className="ribbon flex justify-center">
      <span className="block py-1 px-2">{title}</span>
    </div>
  </motion.div>
);

export default Badge;
