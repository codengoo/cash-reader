import {Dimensions} from 'react-native';

const {fontScale} = Dimensions.get('screen');
console.log(fontScale);

const fontSize = (fontSize: number): number => fontSize / fontScale;

export const FONT = {
  extraSmall: fontSize(8),
  small: fontSize(12),
  medium: fontSize(16),
  large: fontSize(24),
  extraLarge: fontSize(36),
};
