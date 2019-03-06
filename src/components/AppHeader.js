import React, {Component} from 'react';
import {Header} from 'react-native-elements';

export default class AppHeader extends Component{
    render(){
        return(
            <Header
                backgroundColor='#1E234C'
                containerStyle={{ height: '20%' }}
                centerComponent={{ text: '10xGREENER', style: { color: '#72E1A4', paddingBottom: '10%' }, font: 'Libre Franklin'}}
            />
        )
    }
}