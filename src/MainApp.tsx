import {BodyHome} from '@components/body';
import {HeaderHome} from '@components/header';

import {MessageBS} from '@components/bs';
import {CRBottomSheet} from '@components/ui';
import BottomSheet from '@gorhom/bottom-sheet';
import {useEffect, useRef, useState} from 'react';
import {DeviceEventEmitter, Dimensions, StatusBar, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import NativeSmsReader from '../specs/NativeSmsReader';
import {COLORS} from './constants';
import {IMessage, addTransaction, useAppDispatch} from './store';
import {generatePrompt, playSound} from './utils';

export default function MainApp() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [msg, setMsg] = useState<IMessage[]>([]);
  const [currentMsgId, setCurrentMsgId] = useState<string>('');
  const [isRunning, setRunning] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const play = async () => {
    if (msg.length <= 0) return;
    const tmp = [...msg];
    console.log(tmp);

    setMsg([]);
    setRunning(true);
    while (tmp.length > 0) {
      const current = tmp.pop();
      if (!current) continue;

      try {
        const prompt = generatePrompt(current.body);
        await playSound(prompt);
      } catch (e) {
        console.log(e);
      }
    }
    setRunning(false);
  };

  const handleData = (data: IMessage) => {
    dispatch(addTransaction(data));
  };

  useEffect(() => {
    if (!isRunning) play();
  }, [msg]);

  useEffect(() => {
    if (!isRunning) play();
  }, [isRunning]);

  useEffect(() => {
    NativeSmsReader.onNewMessage('VTMONEY', () => {});
    const subscription = DeviceEventEmitter.addListener(
      'onSmsReceived',
      function (data: IMessage) {
        setMsg(msg => [data, ...msg]);
        handleData(data);
        console.log('message come: ', [data, ...msg]);
      },
    );

    return () => {
      subscription.remove();
    };
  }, []);

  const handleShowMessage = (msgId: string) => {
    setCurrentMsgId(msgId);
    bottomSheetRef.current?.expand();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <GestureHandlerRootView
        style={{
          flex: 1,
          backgroundColor: 'grey',
          // paddingBottom:
          //   Dimensions.get('screen').height -
          //   Dimensions.get('window').height -
          //   (StatusBar.currentHeight ?? 0),
        }}>
        <View
          style={{
            display: 'flex',
            overflow: 'hidden',
            flex: 1,
            flexDirection: 'column',
            gap: 40,
            backgroundColor: COLORS.primary,
          }}>
          <HeaderHome />
          <BodyHome onShowMessage={handleShowMessage} />

          <CRBottomSheet ref={bottomSheetRef}>
            <MessageBS msgId={currentMsgId} />
          </CRBottomSheet>
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
