import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Header, Divider} from 'react-native-elements';

export default class ContactScreen extends Component{
    render(){
        return(
            <ScrollView>
                <Header
                    centerComponent={{ text: 'X10 GREENER', style: { color: '#fff' } }}
                />
                <Text>Contact Screen</Text>
                <View style={{backgroundColor: 'orange', flex: 0.5, height: 200}}>
                    <Text>Put contact form here</Text>
                </View>
            </ScrollView>
        )
    }
}