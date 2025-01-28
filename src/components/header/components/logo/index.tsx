import {Text, View} from 'react-native';
import {CashIcon} from '@components/ui/icons';
import {COLORS, space} from '@src/constants';
import styles from './styles';

export function Logo() {
  return (
    <View style={styles.container}>
      <CashIcon color={COLORS.textPrimary} size={space(40)} />
      <Text style={styles.textLogo}>Cash Reader</Text>
    </View>
  );
}
