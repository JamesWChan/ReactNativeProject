import React, {Component} from 'react';
import {Header} from 'react-native-elements';

export default class AppHeader extends Component{
    render(){
        return(
            <Header
                backgroundColor='#1E234C'
                containerStyle={{ height: 50 }}
                centerComponent={{ text: '10xGREENER', style: { color: '#72E1A4', paddingBottom: 20 } }}
                rightComponent={{ text: '$', style: {color: '#F0AD3D', paddingBottom: 20, fontWeight: 'bold', fontSize: 20 } }}
            />
        )
    }
}