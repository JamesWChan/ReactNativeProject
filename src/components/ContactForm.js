import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import {databaseConfig} from '../config/DatabaseConfig'

let addItem = (name, email, message) => {
    databaseConfig.ref('/items').push({
        name: name,
        email: email,
        message: message
    });
};

export default class ContactForm extends Component{
    state = {
        name: '',
        email: '',
        message: ''
    };

    handleNameChange = e => {
        this.setState({
            name: e.nativeEvent.text
        });
    };

    handleEmailChange = e => {
        this.setState({
            email: e.nativeEvent.text
        });
    };

    handleMessageChange = e => {
        this.setState({
            message: e.nativeEvent.text
        });
    };

    handleSubmit = e => {
        addItem(this.state.name, this.state.email, this.state.message);
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
            <View style={styles.container}>
                <Text style={{ color: '#fff' }}>Contact Us</Text>
                <TextInput placeholder="Name" style={styles.inputContainer} onChange={this.handleNameChange}/>
                <TextInput placeholder="Email" style={styles.inputContainer} onChange={this.handleEmailChange}/>
                <TextInput placeholder="Enter your message here" style={styles.inputContainer} onChange={this.handleMessageChange}/>
                <Button title="submit" style={styles.button} onPress={this.handleSubmit}>Submit</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 500,
        alignItems: 'center'
    },
    inputContainer: {
        backgroundColor: '#fff',
        width: '80%',
        height: 50,
        marginTop: 30
    },
    button: {
        marginTop: 30
    }
});