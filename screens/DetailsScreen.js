import { View, Text } from 'react-native';
import FurnitureItem from '../components/FurnitureItem';

const DetailsScreen = ( props ) => {
    console.log(props.route.params.props.title);
  return (
    <View>
        <Text>{props.route.params.props.title}</Text>
        <Text>{props.route.params.props.subTitle}</Text>
      
    </View>
  );
};

export default DetailsScreen;