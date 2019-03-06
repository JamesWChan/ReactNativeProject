import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AppHeader from '../components/AppHeader';
import LinearGradient from 'react-native-linear-gradient';
import Comment from '../components/Comment';
import Post from '../components/Post';

export default class CommunityScreen extends Component{
    render(){
        return(
            <ScrollView>
                <AppHeader/>
                <LinearGradient style={styles.container} colors={['#4c669f', '#3b5998', '#192f6a']}>
                    <Text style={{ color: '#fff' }}>Community Feed</Text>
                    <View>
                        <Comment/>
                        <Post/>
                    </View>
                </LinearGradient>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 500,
        alignItems: 'center'
    }
});