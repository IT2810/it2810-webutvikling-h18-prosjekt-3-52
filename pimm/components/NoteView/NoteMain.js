import React from 'react';
import Title from './NoteMain/Title.js';
import NoteText from './NoteMain/NoteText.js';
import NotePicture from './NoteMain/NotePicture.js';
import { View } from 'react-native';

export default class NoteMain extends React.Component{
	constructor(props){
		super(props);
		this.state={
			title: "",
			note: "",
			image: "",
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
	
	render(){
		return(
		<View>
		<Title sendTitleUp={this.getTitle.bind(this)}/>
		<NoteText sendNoteUp={this.getNote.bind(this)}/>
		<NotePicture sendImageUp={this.getImage.bind(this)}/>
		</View>
		
		);
	}
}