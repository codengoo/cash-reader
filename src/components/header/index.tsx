import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import styles from './styles';
import {Logo} from './components/logo';
import {Dashboard} from './components/dashboard';

export function HeaderHome() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Logo />
      <Dashboard />
    </View>
  );
}
