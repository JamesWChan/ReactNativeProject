import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DividerLine from '../components/DividerLine';

export default class Post extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.textbox}>
                    <Text accessibilityRole={"text"} style={{fontWeight: 'bold', color: '#272727'}}>Name</Text>
                    <Text accessibilityRole={"text"} style={{color: '#797979'}}>Comments from users will be displayed here...</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '80%',
        marginTop: 30,
        borderRadius: 5
    },
    textbox: {
        padding: '5%'
    }
});