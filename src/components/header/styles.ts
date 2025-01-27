import {Dimensions, StatusBar, StyleSheet} from 'react-native';
import {COLORS, PADDING, SPACE} from '../../constants';

const {height} = Dimensions.get('window');
const {height: height1} = Dimensions.get('screen');

console.log(height, height1, StatusBar.currentHeight);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: PADDING.xl,
    display: 'flex',
    flexDirection: 'column',
    gap: SPACE.lg,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  contentContainerStyle: {
    gap: SPACE.lg,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default styles;
