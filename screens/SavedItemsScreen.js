
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, } from 'react-native';
import SavedItem from '../components/SavedItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BottomNavigation, Provider as PaperProvider } from 'react-native-paper';


const SavedItemsScreen = (props) => {
    //get posts from api
    const [posts, setPosts] = useState([]);
    const getPostById = async (id) => {
      try{
        const response = await fetch(`https://www.vandycklukas.be/wp-json/wp/v2/posts/${id}`);
        const json = await response.json();
        setPosts((prevPosts) => [...prevPosts, json]);
        
      } catch (error) {
        console.log(error);
      }
    }
    
    const getPostsFromAsyncStorage = async () => {
      try {
        const ids = await AsyncStorage.getItem('savedItems');
        const idArray = JSON.parse(ids);
        idArray.forEach(id => getPostById(id));
        
      } catch (error) {
        console.log(error);
      }
    }
    
    useEffect(() => {
      getPostsFromAsyncStorage();
      
    }, []);
return (
  <PaperProvider>
<View style={styles.Furniturecontainer}>

      <FlatList
      style={styles.container}
      data={posts}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => 
      (<SavedItem 
        //get image from wordpress api
        image={item.featured_media_urls.large[0]}
        id={item.id}
        title= {item.title.rendered} 
        subTitle={item.excerpt.rendered}
        />)}
      />
    </View>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: '#fff',
      padding: 20,
  },
  Furniturecontainer: {
    
    flex: 1,
    flexWrap: "wrap",
    
  },
});
      export default SavedItemsScreen;