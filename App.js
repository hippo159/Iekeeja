import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import FurnitureItem from './components/FurnitureItem';

export default function App() {
  return (
    <PaperProvider>
    <ScrollView style={styles.Furniturecontainer}>
    <View style={styles.container}>
      <FurnitureItem title ="Development 5" subTitle="YP2908 / 2022"/>
      <FurnitureItem title ="Development 5" subTitle="YP2908 / 2022"/>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    flexGrow: 0,
    flexShrink:0 ,
    justifyContent: "space-evenly",
  },
  Furniturecontainer: {
    flex: 1,
    backgroundColor: '#fff',
        
    
  },
});
