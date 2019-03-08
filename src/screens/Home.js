import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AppHeader from '../components/AppHeader';
import Recommendations from '../components/Recommendations';
import {databaseConfig} from '../config/DatabaseConfig';
import ItemComponent from '../components/ItemComponent';
import LinearGradient from 'react-native-linear-gradient';
import DividerLine from "../components/DividerLine";

let latestRef = databaseConfig.ref('/latest');

export default class HomeScreen extends Component{

    state = {
        items: []
    };

    componentDidMount() {
        latestRef.on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
        });
    }

    render(){
        return(
            <ScrollView>
                <AppHeader/>
                <LinearGradient style={styles.container} colors={['#4c669f', '#3b5998', '#192f6a']}>
                    <Text accessibilityRole={"text"} style={styles.pageTitle}>── Home ──</Text>
                    <View style={styles.weatherContainer}>
                        <Text accessibilityRole={"text"} style={{paddingTop: '15%', fontSize: 20, textAlign: 'center'}}>Current Carbon Monoxide level:</Text>
                        <ItemComponent style={{ marginTop: '10%'}} items={this.state.items} />
                    </View>
                    <DividerLine/>
                    <Recommendations/>
                    <Recommendations/>
                    <Recommendations/>
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
    weatherContainer: {
        alignItems: 'center',
        backgroundColor: '#BCE579',
        height: '25%',
        width: '60%',
        marginTop: 30,
        borderRadius: 100/2
    },
    pageTitle: {
        color: '#fff',
        fontSize: 26,
        marginTop: '5%'
    },
});