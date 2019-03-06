import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Header, Divider} from 'react-native-elements';

export default class MetricsScreen extends Component{
    render(){
        return(
            <ScrollView>
                <Header
                    centerComponent={{ text: 'X10 GREENER', style: { color: '#fff' } }}
                />
                <Text>Metrics Screen</Text>
                <View style={{backgroundColor: 'green', flex: 0.5, height: 200}}>
                    <Text>Put graph here</Text>
                </View>
            </ScrollView>
        )
    }
}