import Svg, {Path} from 'react-native-svg';

interface IIconProps {
  size?: number;
  color?: string;
}
export function CashIcon({size = 24, color = 'red'}: IIconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M7 11a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
      <Path d="M12 14a2 2 0 104 0 2 2 0 10-4 0M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2" />
    </Svg>
  );
}

export function MessageShareIcon({size = 24, color = 'red'}: IIconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M8 9h8M8 13h6M12 21l-3-3H6a3 3 0 01-3-3V7a3 3 0 013-3h12a3 3 0 013 3v6M16 22l5-5" />
      <Path d="M21 21.5V17h-4.5" />
    </Svg>
  );
}
