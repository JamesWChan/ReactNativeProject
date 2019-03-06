import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class MetricsScreen extends Component{
    render(){
        return(
            <ScrollView>
                <AppHeader/>
                <Text>Metrics Screen</Text>
                <View style={{backgroundColor: 'green', flex: 0.5, height: 200}}>
                    <Text>Put graph here</Text>
                </View>
            </ScrollView>
        )
    }
}