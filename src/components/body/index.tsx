import {
  selectMostRecentTransactions,
  selectRecentTransactions,
  useAppSelector,
} from '@src/store';
import {ScrollView, Text, View} from 'react-native';
import {Box} from './components/box';
import styles from './styles';

export function BodyHome() {
  const mostRecentTrans = useAppSelector(selectMostRecentTransactions);
  const recentTrans = useAppSelector(selectRecentTransactions);

  return (
    <ScrollView
      contentContainerStyle={styles.innerContainer}
      style={styles.container}>
      <View style={styles.mostRecent}>
        <Text style={styles.title}>Lịch sử</Text>

        <View style={styles.wrapper}>
          {mostRecentTrans.map(item => (
            <Box isRecent={false} data={item} key={item.date} />
          ))}
        </View>
      </View>

      <View style={styles.mostRecent}>
        <Text style={styles.session}>Gần đây</Text>

        <View style={styles.wrapper}>
          {recentTrans.map(item => (
            <Box data={item} key={item.date} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
