import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Linking} from 'react-native';
import AppHeader from '../components/AppHeader';
import {databaseConfig} from '../config/DatabaseConfig';
import ItemComponent from '../components/ItemComponent';
import LinearGradient from 'react-native-linear-gradient';

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
            <ScrollView>
                <AppHeader/>
                <LinearGradient style={styles.container} colors={['#4c669f', '#3b5998', '#192f6a']}>
                    <View style={styles.weatherContainer}>
                        <ItemComponent items={this.state.items} />
                    </View>
                </LinearGradient>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 500,
        alignItems: 'center'
    },
    weatherContainer: {
        backgroundColor: '#BCE579',
        flex: 0.5,
        height: 50,
        width: '60%',
        marginTop: 50,
        borderRadius: 100/2
    }
});