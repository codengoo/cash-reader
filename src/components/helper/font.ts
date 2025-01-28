import {Dimensions} from 'react-native';

type IFont =
  | 'black'
  | 'bold'
  | 'extra-bold'
  | 'extra-light'
  | 'light'
  | 'medium'
  | 'regular'
  | 'semibold'
  | 'thin';

export const fontFamily = (fontFamily: IFont): string => {
  const prefix = 'Lexend';

  var type = '';
  switch (fontFamily) {
    case 'black':
      type = 'Black';
      break;
    case 'bold':
      type = 'Bold';
      break;
    case 'extra-bold':
      type = 'ExtraBold';
      break;
    case 'extra-light':
      type = 'ExtraLight';
      break;
    case 'light':
      type = 'Light';
      break;
    case 'medium':
      type = 'Medium';
      break;
    case 'regular':
      type = 'Regular';
      break;
    case 'semibold':
      type = 'SemiBold';
      break;
    case 'thin':
      type = 'Thin';
      break;
    default:
      type = 'Regular';
      break;
  }

  return `${prefix}-${type}`;
};
