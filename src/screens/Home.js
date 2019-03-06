import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Header, Divider} from 'react-native-elements';
import {databaseConfig} from '../config/DatabaseConfig';

let itemsRef = databaseConfig.ref('/items');



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

    state = {
        items: []
    };

    componentDidMount() {
        itemsRef.on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
        });
    }

    render(){
        return(
            <ScrollView>
                <Header
                    centerComponent={{ text: 'X10 GREENER', style: { color: '#fff' } }}
                />
                <Text>Home Screen</Text>
                <View style={{backgroundColor: 'red', flex: 0.5, height: 200}}>
                    <Text>{this.state.items[1]}</Text>
                </View>
            </ScrollView>
        )
    }
}
