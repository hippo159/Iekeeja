import{ StyleSheet, View, Image, ScrollView, StatusBar} from 'react-native';
//import use state
import { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const HomeRoute = () => <Text style={{
    backgroundColor: '#fffff0',
}}>Home</Text>;

const SavedRoute = () => <Text>Saved</Text>;

const ThirdRoute = () => <Text>test</Text>;

const FourthRoute = () => <Text>test</Text>;

const NavBar = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
      { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
      { key: 'saved', title: 'Saved', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
      { key: '3', title: 'Recents', focusedIcon: 'history' },
      { key: '4', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    ]);
    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        saved: SavedRoute,
        3: ThirdRoute,
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