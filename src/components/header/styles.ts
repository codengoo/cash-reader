import {Platform, StatusBar, StyleSheet} from 'react-native';
import {COLORS, PADDING, SPACE} from '../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: PADDING.xl,
    display: 'flex',
    flexDirection: 'column',
    gap: SPACE.lg,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  contentContainerStyle: {
    gap: SPACE.lg,
    display: "flex",
    flexDirection: "row",
  }
});

export default styles;
