import{ StyleSheet, Text, View, Image, ScrollView, StatusBar, } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

//the non-state version of this code


const FurnitureItem = (props) => {
const savedItemStorage = useAsyncStorage('savedItems');

const saveItem = async(itemId) => {

 let savedItemsString = await savedItemStorage.getItem();
 if (savedItemsString === null || savedItemsString === undefined || savedItemsString === '') {
  savedItemsString = '[]';
  }
 let savedItems = JSON.parse(savedItemsString);
 if (savedItems.includes(itemId)) {
  console.log("removing " + itemId)
  savedItems = savedItems.filter((item) => item !== itemId);
 }else{
  console.log("adding " + itemId)
  savedItems.push(itemId);
 }
 console.log(savedItems);
 await savedItemStorage.setItem(JSON.stringify(savedItems));

 const result = await savedItemStorage.getItem();
 //console.log(result);
}

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