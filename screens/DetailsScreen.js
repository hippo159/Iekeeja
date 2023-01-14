import { View, Text, Image,StyleSheet } from 'react-native';
import FurnitureItem from '../components/FurnitureItem';

const DetailsScreen = ( props ) => {
    console.log(props.route.params.props.image);
  return (
    <View>
        <View>
            <Image style={styles.image} source={{uri: props.route.params.props.image}}/>
            <Text>{props.route.params.props.title}</Text>
            <Text>{props.route.params.props.subTitle}</Text>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
    image:{
        
        height: 300,
        width: "100%",
     }
});

export default DetailsScreen;