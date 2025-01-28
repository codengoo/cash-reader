import {Dimensions} from 'react-native';

const {scale} = Dimensions.get('screen');
console.log('scale: ' + scale);

export const space = (space: number) => (space * 3) / scale; // 3 is standard scale

export const SPACE = {
  sm: space(4),
  md: space(8),
  lg: space(12),
  xl: space(16),
  xxl: space(20),
  xxxl: space(24),
};

export const PADDING = {
  sm: space(4),
  md: space(8),
  lg: space(12),
  xl: space(20),
  xxl: space(24),
};

export const SIZE = {
  sm: space(4),
  md: space(8),
  lg: space(12),
  xl: space(20),
  xxl: space(24),
  xxxl: space(28),
};
