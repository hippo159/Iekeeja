import React, {useState} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Switch,
  } from 'react-native';
  import FeatherIcon from 'react-native-vector-icons/Feather';  
import {BottomNavigation, Provider as PaperProvider} from 'react-native-paper';


const SettingsScreen = () => {
    //define sections + contained items
    const SECTIONS = [
        //preferences section
        {
          header: 'Preferences',
          items: [
            { icon: 'globe',
              color: '#6b4faa',
              label: 'Language',
              type: 'link' },
            {
              icon: 'moon',
              color: '#6b4faa',
              label: 'Dark Mode',
              value: false,
              type: 'boolean',
            },
            {
              icon: 'wifi',
              color: '#6b4faa',
              label: 'Only Use Wi-Fi',
              value: true,
              type: 'boolean',
            },
            { icon: 'navigation',
            color: '#6b4faa',
            label: 'Location',
            type: 'link' 
            },
            {
              icon: 'users',
              color: '#6b4faa',
              label: 'Allow Friends to Find You',
              value: true,
              type: 'boolean',
            },
            {
              icon: 'airplay',
              color: '#6b4faa',
              label: 'Accessibility mode',
              value: false,
              type: 'boolean',
            },
          ],
        },
        //help section
        {
          header: 'Help',
          icon: 'help-circle',
          items: [
            { icon: 'flag',
              color: '#6b4faa',
              label: 'Report Bug',
              type: 'link' },

            { icon: 'mail',
              color: '#6b4faa',
              label: 'Contact Us',
              type: 'link' },
          ],
        }
        ];
      
      

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <PaperProvider>
        <ScrollView contentContainerStyle={styles.container}>
  
          {SECTIONS.map(({ header, items }) => (
            <View style={styles.section} key={header}>
              <Text style={styles.sectionHeader}>{header}</Text>
              {items.map(({ label, icon, type, value, color }, index) => {
                return (
                  <TouchableOpacity
                    key={label}
                    onPress={() => {
                      // handle onPress
                    }}>
                    <View style={styles.row}>
                      <View style={[styles.rowIcon, { backgroundColor: color }]}>
                        <FeatherIcon color="#fff" name={icon} size={18} />
                      </View>
  
                      <Text style={styles.rowLabel}>{label}</Text>
  
                      <View style={styles.rowSpacer} />
  
                      {type === 'boolean' && <Switch value={value} />}
  
                      {type === 'link' && (
                        <FeatherIcon
                          color="#0c0c0c"
                          name="chevron-right"
                          size={22}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </ScrollView>
        </PaperProvider>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingVertical: 24,
      backgroundColor: '#fff',
    },
    section: {
      paddingHorizontal: 24,
    },
    sectionHeader: {
      paddingVertical: 12,
      fontSize: 12,
      fontWeight: '600',
      color: '#9e9e9e',
      textTransform: 'uppercase',
      letterSpacing: 1.1,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: 50,
      backgroundColor: '#fcf6fd',
      borderRadius: 8,
      marginBottom: 12,
      paddingLeft: 12,
      paddingRight: 12,
    },
    rowIcon: {
      width: 32,
      height: 32,
      borderRadius: 50,
      marginRight: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowLabel: {
      fontSize: 17,
      fontWeight: '500',
      color: '#2c2136',
    },
    rowSpacer: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
  });
    export default SettingsScreen;