import React from 'react';
import { Platform, StatusBar, StyleSheet, ScrollView } from 'react-native';
import NotePicture from './components/NoteView/NoteMain/NotePicture.js';
import Title from './components/NoteView/NoteMain/Title.js';
import NoteText from './components/NoteView/NoteMain/NoteText.js';
import SaveButton from './components/NoteView/NoteTopBar/SaveButton.js';
import NoteTopBar from './components/NoteView/NoteTopBar.js';
import NoteMain from './components/NoteView/NoteMain.js';
import NoteView from './components/NoteView.js';
import { AsyncStorage, Button } from 'react-native';


export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state={
			title: "",
			note: "",
			image: "",
			chosenNote: "",
		}
	}
	
	
	getTitle(newTitle){
		this.setState({title: newTitle});
	}
	getNote(newNote){
		this.setState({note: newNote});
	}
	getImage(newImage){
		this.setState({image: newImage});
	}
	
	loadTitle = async () => {
		try {
			//TODO: Lagre og laste fungerer nå. Når miniatyrene er ferdig så lagres tittelen i chosenNote og vi bytter ut Test (linja under) med this.state.chosenNote.
			//Hvis du vil teste lagring og lasting så må tittelen være Test 
			let result = await AsyncStorage.getItem("Test");
			if (result !== null) {
				let parsed=JSON.parse(result);
				this.setState({title: parsed.title, note: parsed.note, image: parsed.image});
			}
		} catch (error) {
			// Error retrieving data
			}
	}

	render(){
		return(
		<ScrollView>
		<NoteView sendTitleUp={this.getTitle.bind(this)} sendNoteUp={this.getNote.bind(this)} 
		sendImageUp={this.getImage.bind(this)} title={this.state.title} note={this.state.note} image={this.state.image}/>
		<Button
		title="load"
		onPress={this.loadTitle}
		/>
		</ScrollView>
		);
	}

}
