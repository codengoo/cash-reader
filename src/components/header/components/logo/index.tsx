import {Text, View} from 'react-native';
import {CashIcon} from '@components/icons';
import {COLORS} from '@src/constants';
import styles from './styles';

export function Logo() {
  return (
    <View style={styles.container}>
      <CashIcon color={COLORS.textPrimary} size={28} />
      <Text style={styles.textLogo}>Cash Reader</Text>
    </View>
  );
}
