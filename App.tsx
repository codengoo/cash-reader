import React, {useEffect, useState} from 'react';
import {DeviceEventEmitter, View} from 'react-native';
import NativeSmsReader from './specs/NativeSmsReader';
import Sound from 'react-native-sound';
import * as TTS from 'google-tts-api';
import {resolve} from 'url';

interface IMessage {
  address: string;
  body: string;
  data: number;
}

function App(): React.JSX.Element {
  const [msg, setMsg] = useState<IMessage[]>([]);
  const [isRunning, setRunning] = useState<boolean>(false);

  const getUrl = (msg: string) => {
    return TTS.getAudioUrl(msg, {
      lang: 'vi',
      slow: true,
    });
  };

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const extract = (text: string) => {
    const amountPattern = /\+(([\d\.])*) VND/g;
    const namePattern = /ND:.*?([A-Z]{2,}(\s?[A-Z]*\s)*[A-Z]+)/g;

    return {
      amount: [...text.matchAll(amountPattern)][0][1],
      name: [...text.matchAll(namePattern)]?.[0]?.[1] || '',
    };
  };

  const generatePrompt = (msg: string) => {
    const {amount, name} = extract(msg);
    console.log(amount, name);

    return name.trim().length > 0
      ? `Vừa nhận được ${amount} đồng từ ${name}`
      : `Vừa nhận được ${amount} đồng`;
  };

  const playSound = async (text: string) => {
    const url = getUrl(text);

    return new Promise((resolve, reject) => {
      const sound = new Sound(url, '', error => {
        if (error) return reject('Failed to load the sound');

        sound.play(success => {
          sound.release();
          if (!success) reject('Playback failed');
          resolve('Sound played successfully');
        });
      });
    });
  };

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

  useEffect(() => {
    if (!isRunning) play();
  }, [msg]);

  useEffect(() => {
    if (!isRunning) play();
  }, [isRunning]);

  useEffect(() => {
    NativeSmsReader.onNewMessage(null, () => {});
    const subscription = DeviceEventEmitter.addListener(
      'onSmsReceived',
      function (data: IMessage) {
        setMsg(msg => [data, ...msg]);
        console.log('message come: ', [data, ...msg]);
      },
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return <View></View>;
}

export default App;
