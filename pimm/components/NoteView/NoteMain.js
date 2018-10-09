import React from 'react';
import Title from './NoteMain/Title.js';
import NoteText from './NoteMain/NoteText.js';
import NotePicture from './NoteMain/NotePicture.js';
import { View, Button } from 'react-native';

export default class NoteMain extends React.Component{
	constructor(props){
		super(props);
		this.state={
			title: "",
			note: "",
			image: "",
		}
	}
	
	
	render(){
		return(
		<View>
		<Title sendTitleUp={this.props.sendTitleUp} title={this.props.title}/>
		<NoteText sendNoteUp={this.props.sendNoteUp} note={this.props.note}/>
		<NotePicture sendImageUp={this.props.sendImageUp} image={this.props.image}/>
		</View>
		
		);
	}
}