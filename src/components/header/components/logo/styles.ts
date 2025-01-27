import {COLORS} from '@src/constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textLogo: {
    color: COLORS.textPrimary,
    fontFamily: 'Lexend-SemiBold',
    fontSize: 28,
  },

  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center"
  }
});

export default styles;
