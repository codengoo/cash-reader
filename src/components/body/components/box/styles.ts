import {COLORS, PADDING} from '@src/constants';
import {StyleSheet} from 'react-native';

const style = (isRecent: boolean) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      justifyContent: 'center',
      backgroundColor: isRecent ? COLORS.yellow100 : COLORS.green100,
      borderRadius: 16,
      borderWidth: isRecent ? 1 : 2,
      borderColor: isRecent ? COLORS.yellow300 : COLORS.green500,
      padding: PADDING.lg,
    },

    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    dotNew: {
      width: 10,
      height: 10,
      borderRadius: 10,
      backgroundColor: COLORS.green500,
    },

    headerName: {
      display: 'flex',
      flexDirection: 'row',
      gap: 12,
      alignItems: 'center',
    },

    name: {
      fontFamily: 'Lexend-SemiBold',
      fontSize: 16,
      color: isRecent ? COLORS.yellow500 : COLORS.green900,
    },

    time: {
      fontFamily: 'Lexend-SemiBold',
      fontSize: 12,
      color: isRecent ? COLORS.yellow500 : COLORS.green900,
    },

    boxAmount: {
      backgroundColor: isRecent ? COLORS.yellow200 : COLORS.green200,
      padding: PADDING.lg,
      borderRadius: 12,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
    },

    amount: {
      fontFamily: 'Lexend-SemiBold',
      fontSize: isRecent ? 24 : 36,
      color: isRecent ? COLORS.yellow500 : COLORS.green500,
    },

    amountWrapper: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: isRecent ? undefined : 90,
    },
  });

export default style;
