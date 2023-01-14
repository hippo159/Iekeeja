import { View, Text, Image,StyleSheet } from 'react-native';
import FurnitureItem from '../components/FurnitureItem';

const DetailsScreen = ( props ) => {
    const text = props.route.params.props.subTitle;
    const textFiltered = text.substring(3, text.length - 5);
  return (
    <View>
        <View>
            <Image style={styles.image} source={{uri: props.route.params.props.image}}/>
            <Text style={styles.title}> {props.route.params.props.title}</Text>
            <Text style={styles.body}>{textFiltered}</Text>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
    image:{
        height: 300,
        width: "100%",
     },
    title:{
    textAlign: "center",
    fontSize: 28,
    color:"#6b4faa",
    fontWeight: "800",
    margin: 18,
    
    },
    body:{
        fontSize: 18,
        marginHorizontal: 18,
    }
});

export default DetailsScreen;