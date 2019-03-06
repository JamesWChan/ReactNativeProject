import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class AboutScreen extends Component{
    render(){
        return(
            <ScrollView>
                <AppHeader/>
                <Text>About Screen</Text>
                <View style={{backgroundColor: 'yellow', flex: 0.5, height: 200}}>
                    <Text>Put info about organisation here</Text>
                </View>
            </ScrollView>
        )
    }
}