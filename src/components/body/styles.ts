import {fontFamily} from '@components/helper';
import {COLORS, FONT, PADDING, space} from '@src/constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.primary,
    paddingTop: PADDING.xl,
    overflow: 'scroll',
  },

  innerContainer: {
    borderTopLeftRadius: space(40),
    borderTopRightRadius: space(40),
    boxShadow: '0 -4 20 0 #0000001a',
    padding: PADDING.xl,
    display: 'flex',
    gap: space(40),
    backgroundColor: COLORS.white,
    minHeight: '100%',
    paddingBottom: 60,
  },

  title: {
    fontFamily: fontFamily('semibold'),
    fontSize: FONT.large,
    color: COLORS.textPrimary,
  },

  session: {
    fontFamily: fontFamily('semibold'),
    fontSize: FONT.medium,
    color: COLORS.textPrimary,
  },

  mostRecent: {
    display: 'flex',
    gap: 20,
  },
  wrapper: {
    display: 'flex',
    gap: 10,
  },

  action: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  clear: {
    display: 'flex',
    backgroundColor: COLORS.yellow200,
    borderRadius: space(20),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: PADDING.xl,
    paddingVertical: PADDING.sm
  },

  textClear: {
    fontFamily: fontFamily('semibold'),
    fontSize: FONT.medium,
    color: COLORS.textPrimary,
  },
});

export default styles;
