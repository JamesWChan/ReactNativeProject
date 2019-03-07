import React, {Component} from 'react';
import {Header} from 'react-native-elements';
import {Linking} from 'react-native';

export default class AppHeader extends Component{
    render(){
        return(
            <Header
                accessible={true}
                accessibilityLabel={"Main app header"}
                accessibilityRole={"header"}
                backgroundColor='#1E234C'
                containerStyle={{ height: 50 }}
                centerComponent={{ text: '10xGREENER', style: { color: '#72E1A4', paddingBottom: 20, fontSize: 26, fontWeight: 'bold' } }}
                rightComponent={{ text: '$', onPress: () => {Linking.openURL('https://act.friendsoftheearth.uk/donate/make-donation')},style: {color: '#F0AD3D', paddingBottom: 20, fontWeight: 'bold', fontSize: 20 } }}
            />
        )
    }
}