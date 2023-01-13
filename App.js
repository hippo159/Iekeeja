import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import FurnitureItem from './components/FurnitureItem';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <PaperProvider>
    <View style={styles.Furniturecontainer}>
    <View style={styles.container}>
      <FurnitureItem title ="Development 5" subTitle="YP2908 / 2022"/>
      <FurnitureItem title ="Development 5" subTitle="YP2908 / 2022"/>
      <StatusBar style="auto" />
    </View>
    </View>
    <NavBar></NavBar>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    flexGrow: 0,
    flexShrink:0 ,
    justifyContent: "space-evenly",
  },
  Furniturecontainer: {
    
    flex: 3,
    backgroundColor: '#fff',
    flexWrap: "wrap",
    
  },
});
