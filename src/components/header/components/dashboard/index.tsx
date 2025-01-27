import {ISummary} from '@src/store';
import {formatNumber} from '@src/utils';
import {Text, View} from 'react-native';
import styles from './styles';

interface IDashboardProps {
  title: string;
  summary: ISummary;
}
export function Dashboard({title, summary}: IDashboardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <Text style={styles.textMainBox}>{formatNumber(summary.total)}</Text>
        <Text style={styles.textSubBox}>{title}</Text>
      </View>
      <View>
        <Text style={styles.textSub}>{summary.count} giao dịch</Text>
      </View>
    </View>
  );
}
