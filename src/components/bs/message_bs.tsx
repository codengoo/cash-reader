import {CopyIcon} from '@components/ui';
import {BottomSheetView} from '@gorhom/bottom-sheet';
import Clipboard from '@react-native-clipboard/clipboard';
import {COLORS, space} from '@src/constants';
import {selectMessage, useAppSelector} from '@src/store';
import {formatDate} from '@src/utils';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

interface IMessageBSProps {
  msgId: string;
}

export function MessageBS({msgId}: IMessageBSProps) {
  const message = useAppSelector(state => selectMessage(msgId)(state));

  const handleCopy = () => {
    Clipboard.setString(message?.body || '');
  };

  return (
    <BottomSheetView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chi tiết tin nhắn</Text>

        <Pressable onPress={handleCopy}>
          <CopyIcon color={COLORS.textPrimary} size={space(24)} />
        </Pressable>
      </View>

      <View style={styles.boxMessage}>
        <Text style={styles.bodyText}>{message?.body}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>{formatDate(message?.date)}</Text>
      </View>
    </BottomSheetView>
  );
}
