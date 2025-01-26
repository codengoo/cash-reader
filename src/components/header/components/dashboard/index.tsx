import {Text, View} from 'react-native';
import styles from './styles';

export function Dashboard() {
  return (
    <View>
      <View style={styles.boxContainer}>
        <Text style={styles.textMainBox}>100k</Text>
        <Text style={styles.textSubBox}>Tổng nhận</Text>
      </View>
      <View>
        <Text style={styles.textSub}>32 giao dịch</Text>
      </View>
    </View>
  );
}
