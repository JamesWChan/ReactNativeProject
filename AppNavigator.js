import React, {Component} from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from './src/components/Home';
import About from './src/components/About';
import Metrics from './src/components/Metrics';
import Contact from './src/components/Contact';

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