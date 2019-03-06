import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ContactForm from '../components/ContactForm';
import AppHeader from '../components/AppHeader';
import LinearGradient from 'react-native-linear-gradient';

export default class ContactScreen extends Component{
    render(){
        return(
            <ScrollView>
                <AppHeader/>
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
                    <ContactForm/>
                </LinearGradient>
            </ScrollView>
        )
    }
}