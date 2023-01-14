import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {View,StyleSheet } from 'react-native';
import NavBar from './components/NavBar';

import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {


      
      
      
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
          <View style={styles.navbar}>
            <NavBar></NavBar>
          </View>
        </View>
    </NavigationContainer>
    </SafeAreaProvider>
    

    
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  navbar: {
    flex: 0.09,
  },
});


