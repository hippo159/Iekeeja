import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, } from 'react-native';
import FurnitureItem from '../components/FurnitureItem';      

import { BottomNavigation, Provider as PaperProvider } from 'react-native-paper';
    const HomeScreen =  ({navigation}) => {  
      //get posts from api
      const [posts, setPosts] = useState([]);
      const getPosts = async() => {
        try{
          const response = await fetch('https://www.vandycklukas.be/wp-json/wp/v2/posts?categories=18');
          const json = await response.json();
          setPosts(json);
          
          
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        getPosts();
        
      }, []);

return (
    <PaperProvider>
<View style={styles.Furniturecontainer}>

        <FlatList
        style={styles.container}
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => 
        (<FurnitureItem 
          //get image from wordpress api
          image={item.featured_media_urls.large[0]}
          id={item.id}
          title={item.title.rendered} 
          subTitle={item.excerpt.rendered}/>)}
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
  export default HomeScreen;