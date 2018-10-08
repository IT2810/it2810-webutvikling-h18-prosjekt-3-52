import React from 'react';
import { AsyncStorage, Text, View, Button, Alert } from 'react-native';
import {NotePicture} from '../NoteMain/NotePicture.js';
import {Title} from '../NoteMain/Title.js';
import {NoteText} from '../NoteMain/NoteText.js';

export default class SaveButton extends React.Component{
  render(){
      return (
        <Button
          onPress= {() => this.SaveNote()}
          title="Save note"
        />);
  }

  SaveNote = async () => {
      try {
        await AsyncStorage.setItem(this.props.Title,
            [this.props.note, this.props.image]);
      } catch (error) {
        // Error saving data
        Alert.alert("couldn't save")
      }
    };
}
