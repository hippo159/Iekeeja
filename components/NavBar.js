import{ StyleSheet, View, Image, ScrollView, StatusBar} from 'react-native';
//import use state
import { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import SavedItemsScreen from '../screens/SavedItemsScreen';
import SettingsScreen from '../screens/SettingsScreen';




const FourthRoute = () => <Text>test</Text>;

const NavBar = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
  { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
  { key: 'saved', title: 'Saved', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
  { key: 'settings', title: 'Settings', focusedIcon: 'cog', unfocusedIcon: 'cog-outline' },
  { key: '4', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);
  const renderScene = BottomNavigation.SceneMap({
  home: () => <HomeScreen navigation={navigation}/>,
  saved: () => <SavedItemsScreen navigation={navigation}/>,
  settings: () => <SettingsScreen navigation={navigation}/>,
  4: FourthRoute,
  });
  return (
  <BottomNavigation
  navigationState={{ index, routes }}
  onIndexChange={setIndex}
  renderScene={renderScene}
  />
  );
  };
  
  export default NavBar;