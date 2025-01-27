import {COLORS, PADDING, SPACE} from '@src/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: PADDING.xl,
    display: 'flex',
    flexDirection: 'column',
    gap: SPACE.xl,
    paddingBottom: 2 * PADDING.xl,
  },

  title: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: 16,
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
    fontFamily: 'Lexend-SemiBold',
    fontSize: 16,
    color: 'black',
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  footerText: {
    fontFamily: 'Lexend-Medium',
    fontSize: 16,
    color: COLORS.yellow500,
  },
});
