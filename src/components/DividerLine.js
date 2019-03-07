import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Divider} from "react-native-elements";

export default class DividerLine extends Component{
    render(){
        return(
            <Divider style={styles.divider}/>
        )
    }
}

const styles = StyleSheet.create({
    divider: {
        backgroundColor: '#fff',
        width: '60%',
        height: 3,
        marginTop: '5%'
    }
});