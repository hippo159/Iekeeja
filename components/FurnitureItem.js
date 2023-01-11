import{ StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native';

const FurnitureItem = (props) => {
return (
<View style={styles.tile}>
<Image style={styles.tileImage} source={require('../assets/icon.png')} />
<View style={styles.tileDetails}>
  <Text style={styles.tileTitle}>{props.title}</Text>
  <Text style={styles.tileSubTitle}>{props.subTitle}</Text>
  </View>
</View>
);
}
const styles = StyleSheet.create({
tile:{
    height: 200,
    borderColor: "#B4B8DA",
    borderWidth: 1,
    borderRadius: 5,
    flexBasis: "48%",
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
    height: 120,
  },
  tileDetails:{
    padding: 6,
  }
});

export default FurnitureItem;