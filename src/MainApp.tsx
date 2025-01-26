import {BodyHome} from '@components/body';
import {HeaderHome} from '@components/header';

import {useEffect, useState} from 'react';
import {DeviceEventEmitter, View} from 'react-native';
import NativeSmsReader from '../specs/NativeSmsReader';
import {COLORS} from './constants';
import {IMessage, addTransaction, useAppDispatch} from './store';
import {generatePrompt, playSound} from './utils';

export default function MainApp() {
  const [msg, setMsg] = useState<IMessage[]>([]);
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

  return (
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
      <BodyHome />
    </View>
  );
}
