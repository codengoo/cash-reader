import {COLORS, PADDING} from '@src/constants';
import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width - PADDING.xl * 2
  },

  boxContainer: {
    borderRadius: 32,
    borderWidth: 2,
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
    fontSize: 16,
    textAlign: "right",
    marginRight: PADDING.xl
  },
});

export default styles;
