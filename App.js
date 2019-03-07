/*import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigator from './AppNavigator';

export default class App extends Component{
  render() {
    return (
       <View>
           <AppNavigator/>
       </View>
    );
  }
}*/

import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from './src/screens/Home';
import Community from './src/screens/Community';
import Contact from './src/screens/Contact';

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: () => (
                <FontAwesome name='home' size={30} color="#000" />
            )
        }
    },
    Community: {
        screen: Community,
        navigationOptions: {
            tabBarIcon: () => (
                <FontAwesome name='comments' size={30} color="#000" />
            )
        }
    },
    Contact: {
        screen: Contact,
        navigationOptions: {
            tabBarIcon: () => (
                <FontAwesome name='envelope' size={30} color="#000" />
            )
        }
    }
});

export default createAppContainer(TabNavigator);