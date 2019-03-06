import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Header, Divider} from 'react-native-elements';

/*export default class ListItem extends Component {

    state = {
        items: []
    };

    render() {
        return (
            <View>
                <Text>Hello</Text>
            </View>
        )
    }
}*/


export default class HomeScreen extends Component{
    render(){
        return(
            <ScrollView>
                <Header
                    centerComponent={{ text: 'X10 GREENER', style: { color: '#fff' } }}
                />
                <Text>Home Screen</Text>
                <View style={{backgroundColor: 'red', flex: 0.5, height: 200}}>
                    <Text>Put air data here</Text>
                </View>
            </ScrollView>
        )
    }
}
