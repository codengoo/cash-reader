import {
  resetTransaction,
  selectMostRecentTransactions,
  selectRecentTransactions,
  useAppDispatch,
  useAppSelector,
} from '@src/store';
import {Pressable, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Box} from './components/box';
import styles from './styles';

interface IBodyProps {
  onShowMessage: (message: string) => void;
}

export function BodyHome({onShowMessage}: IBodyProps) {
  const mostRecentTrans = useAppSelector(selectMostRecentTransactions);
  const recentTrans = useAppSelector(selectRecentTransactions);
  const dispatch = useAppDispatch();

  const handlePressClear = () => {
    dispatch(resetTransaction());
  };

  return (
    <ScrollView
      contentContainerStyle={styles.innerContainer}
      style={styles.container}>
      <View style={styles.action}>
        <Text style={styles.title}>Lịch sử</Text>
        <Pressable style={styles.clear} onPress={handlePressClear}>
          <Text style={styles.textAction}>Xóa</Text>
        </Pressable>
      </View>

      {mostRecentTrans.length > 0 && (
        <View style={styles.mostRecent}>
          <View style={styles.wrapper}>
            {mostRecentTrans.reverse().map(item => (
              <Box
                isRecent={false}
                data={item}
                key={item.date}
                onOpenMessagePress={onShowMessage}
              />
            ))}
          </View>
        </View>
      )}

      <View style={styles.mostRecent}>
        {mostRecentTrans.length > 1 && (
          <Text style={styles.session}>Gần đây</Text>
        )}

        <View style={styles.wrapper}>
          {recentTrans.reverse().map(item => (
            <Box
              data={item}
              key={item.date}
              onOpenMessagePress={onShowMessage}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
