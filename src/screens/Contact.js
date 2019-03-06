import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Header, Divider} from 'react-native-elements';
import ContactForm from '../components/ContactForm';

export default class ContactScreen extends Component{
    render(){
        return(
            <ContactForm/>
        )
    }
}