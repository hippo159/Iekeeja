
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, } from 'react-native';
import SavedItem from '../components/SavedItem';


const SavedItemsScreen = (props) => {
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
      export default SavedItemsScreen;