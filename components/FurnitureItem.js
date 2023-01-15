import{ StyleSheet, Text, View, Image, ScrollView, StatusBar, } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

//the non-state version of this code
//const savedItems = [];
//const saveItem = (itemId) => {
//    savedItems.push(itemId);
//    console.log(savedItems);
//}
const FurnitureItem = (props) => {
  //the state version of this code
  //const [savedItems,setSavedItems] = useState([]);
  // const saveItem = (itemId) => {
  //  setSavedItems(itemId);
  //  console.log(savedItems);
  //}
const navigation = useNavigation();
const excerpt = props.subTitle.substring(3, 80) + '...';
const id = props.id;
return (
<View style={styles.tile}>
<Image style={styles.tileImage} source={{uri: props.image}} />
    <View style={styles.tileDetails}>
    <Text style={styles.tileTitle}>{props.title}</Text>
    <Text style={styles.tileSubTitle}>{excerpt}</Text>
    </View>    
    <View style={styles.tileButtons}>
    <IconButton
        icon="heart-outline"
        animated={true}
        style={styles.button}
        mode='contained'
        size={20}
        onPress={() => saveItem(id)}
        />
        <IconButton
        style={styles.button}
        icon="arrow-right"
        animated={true}
        mode='contained'
        size={20}
        onPress={() => navigation.navigate('DetailsScreen', { props })}

        />
        
    </View>
</View>



);
}
const styles = StyleSheet.create({
tileButtons:{
    
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 5,
},

tile:{
    height: 'auto',
    borderColor: "#B4B8DA",
    borderBottomWidth: 1,
    borderRadius: 5,
    flexBasis: "90%",
    flexDirection: "column",
    marginVertical: '2%',
    
    
  },
  tileTitle:{
    fontSize: 26,
    color:"#6b4faa",
    fontWeight: "800",
    paddingBottom: 10,
  },
  tileSubTitle:{
    fontSize: 16,
  },
  tileImage:{
    width: "100%",
    height: 180,
    borderRadius: 5,
  },
  tileDetails:{
    padding: 6,
  }
});

export default FurnitureItem;