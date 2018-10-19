import React from 'react';
import { AsyncStorage, Text, View, Button, Alert } from 'react-native';
import {NotePicture} from '../NoteMain/NotePicture.js';
import Title from '../NoteMain/Title.js';
import { NoteText } from '../NoteMain/NoteText.js';

export default class SaveButton extends React.Component{
    render(){
        return (
            <View style={{width: 100}}>

                <Button
                    onPress={this.saveNote}
                    title="Save note"
                    color="#B8860B"
                />

            </View>
        );
    }

    saveNote = async () => {

        if(this.props.title === ""){
            alert("Please enter a title");
            return;
        }

        let obj={
            title: this.props.title,
            note: this.props.note,
            image: this.props.image
        };
        try {
            await AsyncStorage.removeItem(this.props.oldTitle);
            await AsyncStorage.setItem(this.props.title, JSON.stringify(obj));

        } catch (error) {
            alert("Couldn't save")
        }
    }
}
