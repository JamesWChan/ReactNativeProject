import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
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

    submitAndClear = () => {
        addItem(this.state.name, this.state.email, this.state.message);

        Alert.alert(
            'Message submitted ',
            'Thanks for your feedback.',
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
        );

        this.setState({
            name: '',
            email: '',
            message: ''
        })
    };

    render(){
        return(
            <View style={styles.container}>
                <Text accessibilityRole={"text"} style={styles.pageTitle}>── Contact Us ──</Text>
                <TextInput
                    accessible={true}
                    accessibilityLabel={"Name input field"}
                    accessibilityTraits={"button"}
                    accessibilityComponentType={"button"}
                    placeholder="Name"
                    style={styles.inputContainer}
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                />
                <TextInput
                    accessible={true}
                    accessibilityLabel={"Email input field"}
                    accessibilityTraits={"button"}
                    accessibilityComponentType={"button"}
                    placeholder="Email"
                    style={styles.inputContainer}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput
                    accessible={true}
                    accessibilityLabel={"Message input field"}
                    accessibilityTraits={"button"}
                    accessibilityComponentType={"button"}
                    placeholder="Enter your message"
                    style={styles.inputContainer}
                    onChangeText={(message) => this.setState({message})}
                    value={this.state.message}
                />
                <TouchableOpacity
                    accessible={true}
                    accessibilityLabel={"Contact form submit button"}
                    accessibilityTraits={"button"}
                    accessibilityComponentType={"button"}
                    style={styles.button}
                    onPress={this.submitAndClear}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 600,
        alignItems: 'center'
    },
    inputContainer: {
        backgroundColor: '#fff',
        width: '80%',
        height: 50,
        marginTop: '10%'
    },
    pageTitle: {
        color: '#fff',
        fontSize: 26,
        marginTop: '5%'
    },
    button: {
        alignItems: 'center',
        marginTop: '10%',
        padding: '5%',
        width: '40%',
        backgroundColor: '#72E1A4',
        color: '#272727',
        borderRadius: 5
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});