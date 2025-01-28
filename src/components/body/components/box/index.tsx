import {MessageShareIcon} from '@components/ui/icons';
import {COLORS, space} from '@src/constants';
import {IMessageDetail} from '@src/store';

import {formatNumber, parseDate} from '@src/utils';
import {Pressable, Text, View} from 'react-native';
import style from './styles';

interface IBox {
  isRecent?: boolean;
  data: IMessageDetail;
  onOpenMessagePress: (messageId: string) => void;
}

export function Box({isRecent = true, data, onOpenMessagePress}: IBox) {
  const styles = style(isRecent);

  const onPressMessagePress = () => {
    onOpenMessagePress(data.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerName}>
          {!isRecent && <View style={styles.dotNew}></View>}
          <Text style={styles.name}>{data.name}</Text>
        </View>

        <Text style={styles.time}>{parseDate(data.date)}</Text>
      </View>

      <View style={styles.boxAmount}>
        <View style={styles.amountWrapper}>
          <Text style={styles.amount}>{formatNumber(data.amount)} đ</Text>
        </View>
        <Pressable onPress={onPressMessagePress}>
          <MessageShareIcon
            color={isRecent ? COLORS.yellow500 : COLORS.green900}
            size={space(28)}
          />
        </Pressable>
      </View>
    </View>
  );
}
