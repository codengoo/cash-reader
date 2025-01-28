import { fontFamily } from '@components/helper';
import {COLORS, FONT} from '@src/constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textLogo: {
    color: COLORS.textPrimary,
    fontFamily: fontFamily("semibold"),
    fontSize: FONT.large,
  },

  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  }
});

export default styles;
