import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, Button, Alert} from 'react-native';
import AppHeader from '../components/AppHeader';
import {databaseConfig} from '../config/DatabaseConfig'
import LinearGradient from 'react-native-linear-gradient';

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
                <AppHeader/>
                <LinearGradient style={styles.container} colors={['#4c669f', '#3b5998', '#192f6a']}>
                    <Text>Enter something here:</Text>
                    <TextInput onChange={this.handleChange}/>
                    <Button title="submit" onPress={this.handleSubmit}>Submit</Button>
                </LinearGradient>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 500,
    }
});