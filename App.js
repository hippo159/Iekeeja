import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import FurnitureItem from './components/FurnitureItem';

export default function App() {
  return (
    <View style={styles.container}>
      <FurnitureItem title ="Development 5" subTitle="YP2908 / 2022"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
