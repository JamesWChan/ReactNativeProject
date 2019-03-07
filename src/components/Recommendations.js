import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Recommendations extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.textbox}>
                    <Text accessibilityRole={"text"} style={{fontWeight: 'bold', color: '#272727'}}>Recommendation</Text>
                    <Text accessibilityRole={"text"} style={{color: '#797979'}}>Lorem ipsum</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#BCE579',
        width: '80%',
        marginTop: 30,
        borderRadius: 5
    },
    textbox: {
        padding: '5%'
    }
});