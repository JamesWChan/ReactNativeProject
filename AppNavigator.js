import React, {Component} from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from './src/screens/Home';
import About from './src/screens/Community';
import Metrics from './src/screens/Metrics';
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
    Metrics: {
        screen: Metrics,
        navigationOptions: {
            tabBarIcon: () => (
                <FontAwesome name='sliders' size={30} color="#000" />
            )
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            tabBarIcon: () => (
                <FontAwesome name='info' size={30} color="#000" />
            )
        }
    },
    Contact: {
        screen: Contact,
        navigationOptions: {
            tabBarIcon: () => (
                <FontAwesome name='comments' size={30} color="#000" />
            )
        }
    }
});

const AppNavigator = createAppContainer(TabNavigator);

export default AppNavigator;