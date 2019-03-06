import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Linking} from 'react-native';
import AppHeader from '../components/AppHeader';
import {databaseConfig} from '../config/DatabaseConfig';
import ItemComponent from '../components/ItemComponent';

let itemsRef = databaseConfig.ref('/items');

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
            <ScrollView styles={styles.homeScreen}>
                <AppHeader/>
                <Text>Home Screen</Text>
                <View style={{backgroundColor: 'red', flex: 0.5, height: 200}}>
                    <ItemComponent items={this.state.items} />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    homeScreen: {
        backgroundColor: 'grey'
    }
});