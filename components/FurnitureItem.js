import{ StyleSheet, Text, View, Image, ScrollView, StatusBar, } from 'react-native';
import{ useState, useEffect } from 'react';
import { Button, IconButton } from 'react-native-paper';
const FurnitureItem = (props) => {
const id = props.id;

return (
<View style={styles.tile}>
<Image style={styles.tileImage} source={{uri: props.image}} />
    <View style={styles.tileDetails}>
    <Text style={styles.tileTitle}>{props.title}</Text>
    <Text style={styles.tileSubTitle}>{props.subTitle}</Text>
    </View>    
    <View style={styles.tileButtons}>
        <IconButton
        style={styles.button}
        icon="cart"
        animated={true}
        mode='contained'
        size={20}
        onPress={() => console.log(id + 'cart')}
        />
        <IconButton
        icon="heart-outline"
        animated={true}
        style={styles.button}
        mode='contained'
        size={20}
        onPress={() => console.log(id+'save')}
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
button:{
    
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
    fontSize: 21,
    fontWeight: "600",
  },
  tileSubTitle:{
    fontSize: 14,
  },
  tileImage:{
    width: "100%",
    height: 180,
  },
  tileDetails:{
    padding: 6,
  }
});

export default FurnitureItem;