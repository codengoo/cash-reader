import {
  selectNumberTransaction,
  selectTotalMoney,
  useAppSelector,
} from '@src/store';
import {formatNumber} from '@src/utils';
import {Text, View} from 'react-native';
import styles from './styles';

export function Dashboard() {
  const total = useAppSelector(selectTotalMoney);
  const numTrans = useAppSelector(selectNumberTransaction);

  return (
    <View>
      <View style={styles.boxContainer}>
        <Text style={styles.textMainBox}>{formatNumber(total)}</Text>
        <Text style={styles.textSubBox}>Tổng nhận</Text>
      </View>
      <View>
        <Text style={styles.textSub}>{numTrans} giao dịch</Text>
      </View>
    </View>
  );
}
