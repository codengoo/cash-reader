import {fontFamily} from '@components/helper';
import {COLORS, FONT, PADDING, SPACE} from '@src/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: PADDING.xl,
    display: 'flex',
    flexDirection: 'column',
    gap: SPACE.xl,
  },

  title: {
    fontFamily: fontFamily('semibold'),
    fontSize: FONT.small,
    color: COLORS.textPrimary,
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  boxMessage: {
    backgroundColor: COLORS.yellow100,
    padding: PADDING.xl,
    borderRadius: 12,
  },

  bodyText: {
    fontFamily: fontFamily('semibold'),
    fontSize: FONT.small,
    color: 'black',
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  footerText: {
    fontFamily: fontFamily('medium'),
    fontSize: FONT.small,
    color: COLORS.yellow500,
  },
});
