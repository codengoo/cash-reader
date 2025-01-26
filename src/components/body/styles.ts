import {COLORS, PADDING} from '@src/constants';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.primary,
    paddingTop: PADDING.xl,
    overflow: "scroll"
  },

  innerContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    boxShadow: '0 -4 20 0 #0000001a',
    padding: PADDING.xl,
    display: 'flex',
    gap: 40,
    backgroundColor: COLORS.white,
    paddingBottom: 60
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
});

export default styles;
