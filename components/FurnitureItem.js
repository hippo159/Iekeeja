import{ StyleSheet, Text, View, Image, ScrollView, StatusBar, Button } from 'react-native';

const FurnitureItem = (props) => {
return (
<View style={styles.tile}>
<Image style={styles.tileImage} source={require('../assets/icon.png')} />
    <View style={styles.tileDetails}>
    <Text style={styles.tileTitle}>{props.title}</Text>
    <Text style={styles.tileSubTitle}>{props.subTitle}</Text>
    </View>
    <Button style={styles.button} title="View" onPress={() => alert("View")} />
    <Button style={styles.button} title="Edit" onPress={() => alert("Edit")} />
</View>


);
}
const styles = StyleSheet.create({
tileButtons:{
    width: "10%",
},
button:{
width: "50px",
},
tile:{
    height: 300,
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