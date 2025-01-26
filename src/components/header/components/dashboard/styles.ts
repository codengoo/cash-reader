import {COLORS, PADDING} from '@src/constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},

  boxContainer: {
    borderRadius: 32,
    borderWidth: 1,
    borderColor: COLORS.textPrimary,
    backgroundColor: COLORS.secondary,
    padding: PADDING.xl,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textMainBox: {
    fontSize: 36,
    fontFamily: 'Lexend-Bold',
    color: COLORS.textPrimary,
  },

  textSubBox: {
    fontSize: 16,
    fontFamily: 'Lexend-Bold',
    color: COLORS.textPrimary,
  },

  textSub: {
    fontFamily: 'Lexend-Bold',
    color: COLORS.textPrimary,
    marginTop: 12,
    textAlign: "right",
    marginRight: PADDING.xl
  },
});

export default styles;
