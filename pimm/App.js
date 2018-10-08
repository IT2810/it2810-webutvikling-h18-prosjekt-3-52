import React from 'react';
import { Platform, StatusBar, StyleSheet, ScrollView } from 'react-native';
import NotePicture from './components/NoteView/NoteMain/NotePicture.js';
import Title from './components/NoteView/NoteMain/Title.js';
import NoteText from './components/NoteView/NoteMain/NoteText.js';
import SaveButton from './components/NoteView/NoteTopBar/SaveButton.js';
import NoteMain from './components/NoteView/NoteMain.js';


export default class App extends React.Component {

	render(){
		return(

		<ScrollView>
		<SaveButton/>
		<Title/>
		<NoteText/>
		<NotePicture/>
		<ScrollView>	
		<NoteMain/>
		</ScrollView>
		);
	}

}
