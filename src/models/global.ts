export enum ThemeMode {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum Direction {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

export const THEME_TAG = 'theme';

export type Expirience = {
  title: string;
  company: string;
  logo?: string;
  date: string;
  descriptions: {
    subtitle: string;
    desc: string;
  }[];
};

export enum BadgeColor {
  YELLOW = 'yellow',
  ORANGE = 'orange',
  PINK = 'pink',
  RED = 'red',
  PURPLE = 'purple',
  TEAL = 'teal',
  BLUE = 'blue',
  BLUE_DARK = 'blue-dark',
  GREEN = 'green',
  GREEN_DARK = 'green-dark',
  SILVER = 'silver',
  GOLD = 'gold',
  GRAY = 'gray',
}
