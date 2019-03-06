import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, Button, Alert} from 'react-native';
import {Header, Divider} from 'react-native-elements';
import {databaseConfig} from '../config/DatabaseConfig'

let addItem = item => {
    databaseConfig.ref('/items').push({
        name: item
    });
};

export default class ContactForm extends Component{
    state = {
        name: ''
    };

    handleChange = e => {
        this.setState({
            name: e.nativeEvent.text
        });
    };

    handleSubmit = e => {
        addItem(this.state.name);
        Alert.alert(
            'Message submitted ',
            'Thanks for your feedback.',
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
        );
    };

    render(){
        return(
            <ScrollView>
                <Header
                    centerComponent={{ text: 'X10 GREENER', style: { color: '#fff' } }}
                />
                <Text>Contact Screen</Text>
                <Text>Enter something here:</Text>
                <TextInput onChange={this.handleChange}/>
                <Button title="submit" onPress={this.handleSubmit}>Submit</Button>
            </ScrollView>
        )
    }
}