
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, } from 'react-native';
import SavedItem from '../components/SavedItem';
import { BottomNavigation, Provider as PaperProvider } from 'react-native-paper';


const SavedItemsScreen = (props) => {
    return (
        <PaperProvider>
    <View style={styles.Furniturecontainer}>
    
            <Text>iets anders</Text>
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