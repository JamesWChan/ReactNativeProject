import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Header, Divider} from 'react-native-elements';

export default class AboutScreen extends Component{
    render(){
        return(
            <ScrollView>
                <Header
                    centerComponent={{ text: 'X10 GREENER', style: { color: '#fff' } }}
                />
                <Text>About Screen</Text>
                <View style={{backgroundColor: 'yellow', flex: 0.5, height: 200}}>
                    <Text>Put info about organisation here</Text>
                </View>
            </ScrollView>
        )
    }
}