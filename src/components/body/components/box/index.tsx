import {MessageShareIcon} from '@components/icons';
import {Text, View} from 'react-native';
import style from './styles';
import {COLORS} from '@src/constants';
import {useMemo} from 'react';

interface IBox {
  isRecent?: boolean;
}

export function Box({isRecent = true}: IBox) {
  const styles = style(isRecent);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerName}>
          {!isRecent && <View style={styles.dotNew}></View>}
          <Text style={styles.name}>Do Tuan Nghia</Text>
        </View>

        <Text style={styles.time}>1 phut truoc</Text>
      </View>

      <View style={styles.boxAmount}>
        <View style={styles.amountWrapper}>
          <Text style={styles.amount}>+100.000 d</Text>
        </View>
        <MessageShareIcon
          color={isRecent ? COLORS.yellow500 : COLORS.green900}
          size={28}
        />
      </View>
    </View>
  );
}
