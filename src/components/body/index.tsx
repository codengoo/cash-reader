import {ScrollView, Text, View} from 'react-native';
import styles from './styles';
import {Box} from './components/box';

export function BodyHome() {
  return (
    <ScrollView
      contentContainerStyle={styles.innerContainer}
      style={styles.container}>
      <View style={styles.mostRecent}>
        <Text style={styles.title}>Lịch sử</Text>

        <View style={styles.wrapper}>
          <Box isRecent={false} />
        </View>
      </View>

      <View style={styles.mostRecent}>
        <Text style={styles.session}>Gần đây</Text>

        <View style={styles.wrapper}>
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </View>
      </View>
    </ScrollView>
  );
}
