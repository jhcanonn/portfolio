import { Direction } from '@models/global';

export const fadeIn = (
  direction: string,
  type: string = 'tween',
  duration: number = 0.5,
  delay: number = 0.25
) => {
  return {
    hidden: {
      x:
        direction === Direction.LEFT
          ? 100
          : direction === Direction.RIGHT
          ? -100
          : 0,
      y:
        direction === Direction.UP
          ? 100
          : direction === Direction.DOWN
          ? -100
          : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        duration: duration,
        delay: delay,
        ease: 'easeOut',
      },
    },
  };
};
