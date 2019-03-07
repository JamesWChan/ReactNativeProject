import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AppHeader from '../components/AppHeader';
import LinearGradient from 'react-native-linear-gradient';
import Comment from '../components/Comment';
import Post from '../components/Post';
import DividerLine from "../components/DividerLine";


export default class CommunityScreen extends Component{
    render(){
        return(
            <ScrollView>
                <AppHeader/>
                <LinearGradient style={styles.container} colors={['#4c669f', '#3b5998', '#192f6a']}>
                    <Text style={styles.pageTitle}>── Community Feed ──</Text>
                    <Comment/>
                    <DividerLine/>
                    <Post/>
                    <Post/>
                    <Post/>
                </LinearGradient>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 600,
        alignItems: 'center'
    },
    pageTitle: {
        color: '#fff',
        fontSize: 26,
        marginTop: '5%'
    }
});