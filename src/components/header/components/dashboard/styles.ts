import {fontFamily} from '@components/helper';
import {COLORS, FONT, PADDING, space} from '@src/constants';
import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width - PADDING.xl * 2,
  },

  boxContainer: {
    borderRadius: space(32),
    borderWidth: 2,
    borderColor: COLORS.textPrimary,
    backgroundColor: COLORS.secondary,
    padding: PADDING.xl,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textMainBox: {
    fontSize: FONT.extraLarge,
    fontFamily: fontFamily('bold'),
    color: COLORS.textPrimary,
  },

  textSubBox: {
    fontSize: FONT.medium,
    fontFamily: fontFamily('bold'),
    color: COLORS.textPrimary,
  },

  textSub: {
    fontFamily: fontFamily('bold'),
    color: COLORS.textPrimary,
    marginTop: PADDING.lg,
    fontSize: FONT.medium,
    textAlign: 'right',
    marginRight: PADDING.xl,
  },
});

export default styles;
