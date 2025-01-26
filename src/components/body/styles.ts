import {COLORS, PADDING} from '@src/constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.primary,
    paddingTop: PADDING.xl,
    overflow: 'scroll',
  },

  innerContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    boxShadow: '0 -4 20 0 #0000001a',
    padding: PADDING.xl,
    display: 'flex',
    gap: 40,
    backgroundColor: COLORS.white,
    minHeight: '100%',
    paddingBottom: 60,
  },

  title: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: 24,
    color: COLORS.textPrimary,
  },

  session: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: 16,
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
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  textAction: {
    fontFamily: 'Lexend-SemiBold',
    color: COLORS.textPrimary,
  },
});

export default styles;
