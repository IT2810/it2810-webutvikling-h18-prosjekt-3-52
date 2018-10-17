import React from 'react';
import { AsyncStorage, Text, View, Button, Alert } from 'react-native';
//import startview

export default class BackButton extends React.Component{


    render(){
        return (
            <View style={{width: 100}}>
                <Button
                    title="Back"
                    color="#B8860B"
                    onPress={() => this.props.changeView()}
                />
            </View>
        );
    }
}
