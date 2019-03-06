import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Linking} from 'react-native';

export default class Recommendations extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Recommendation</Text>
                <Text>Lorem ipsum</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8D765',
        width: '80%',
        marginTop: 30,
        borderRadius: 5
    }
});