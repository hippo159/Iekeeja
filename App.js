import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import FurnitureItem from './components/FurnitureItem';
import NavBar from './components/NavBar';

export default function App() {

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

    <NavBar></NavBar>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  Furniturecontainer: {
    
    flex: 10,
    backgroundColor: '#fff',
    flexWrap: "wrap",
    
  },
});
