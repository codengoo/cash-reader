import {PADDING, SPACE} from '@src/constants';
import {
  selectTodaySummary,
  selectTotalSummary,
  useAppSelector,
} from '@src/store';
import {Dimensions, ScrollView, StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Dashboard} from './components/dashboard';
import {Logo} from './components/logo';
import styles from './styles';

const {width} = Dimensions.get('window');

export function HeaderHome() {
  const totalTodaySummary = useAppSelector(selectTodaySummary);
  const totalSummary = useAppSelector(selectTotalSummary);

  return (
    <View>
      <StatusBar hidden />
      <SafeAreaView style={styles.container}>
        <Logo />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - PADDING.xl * 2 + SPACE.lg}
          decelerationRate={'fast'}
          snapToAlignment="start"
          contentContainerStyle={styles.contentContainerStyle}>
          <Dashboard title="Tổng nhận" summary={totalSummary} />
          <Dashboard title="Tổng nhận trong ngày" summary={totalTodaySummary} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
