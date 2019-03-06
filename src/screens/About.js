import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AppHeader from '../components/AppHeader';
import LinearGradient from 'react-native-linear-gradient';

export default class AboutScreen extends Component{
    render(){
        return(
            <ScrollView>
                <AppHeader/>
                <LinearGradient style={styles.container} colors={['#4c669f', '#3b5998', '#192f6a']}>
                    <View style={{backgroundColor: 'yellow', flex: 0.5, height: 200}}>
                        <Text>Put info about organisation here</Text>
                    </View>
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