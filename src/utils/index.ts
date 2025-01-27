import {format, formatDistanceToNow} from 'date-fns';
import {vi} from 'date-fns/locale';
import * as TTS from 'google-tts-api';
import Sound from 'react-native-sound';

export const getUrl = (msg: string) => {
  return TTS.getAudioUrl(msg, {
    lang: 'vi',
    slow: true,
  });
};

export const extract = (text: string) => {
  const amountPattern = /\+(([\d\.])*) VND/g;
  const namePattern = /ND:.*?([A-Z]{2,}(\s?[A-Z]*\s)*[A-Z]+)/g;

  const amount = [...text.matchAll(amountPattern)][0][1].replaceAll('.', '');
  const name = [...text.matchAll(namePattern)]?.[0]?.[1] || '';

  return {
    amount: Number(amount),
    name,
  };
};

export const generatePrompt = (msg: string) => {
  const {amount, name} = extract(msg);
  console.log(amount, name);

  return name.trim().length > 0
    ? `Vừa nhận được ${amount} đồng từ ${name}`
    : `Vừa nhận được ${amount} đồng`;
};

export const playSound = async (text: string) => {
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

export const parseDate = (date: number) =>
  formatDistanceToNow(new Date(Number(date)), {
    addSuffix: true,
    locale: vi,
  });

export const formatNumber = (number: number) => number.toLocaleString('vi-VN');
export const formatDate = (date: number | undefined) => {
  if (!date) return '';
  const d = new Date(Number(date));
  return format(d, 'HH:mm dd:MM:yyyy');
};
