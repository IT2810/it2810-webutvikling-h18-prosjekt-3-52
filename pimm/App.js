import React from 'react';
import { Platform, StatusBar, StyleSheet, ScrollView } from 'react-native';
import NotePicture from './components/NoteView/NoteMain/NotePicture.js';
import Title from './components/NoteView/NoteMain/Title.js';
import NoteText from './components/NoteView/NoteMain/NoteText.js';
import SaveButton from './components/NoteView/NoteTopBar/SaveButton.js';
import NoteTopBar from './components/NoteView/NoteTopBar.js';
import NoteMain from './components/NoteView/NoteMain.js';
import NoteView from './components/NoteView.js';
import StartView from './components/StartView.js';
import { AsyncStorage, Button } from 'react-native';


export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state={
			title: "",
			note: "",
			image: "",
			view: true,
			fromLoaded: false,
			oldTitle: "",
		}
	}
	
	changeView(){
		this.setState({view: !this.state.view});
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
	
	fromLoadedF(){
		this.setState({fromLoaded: false});
	}
	
	fromLoadedT(){
		this.setState({fromLoaded: true});
	}
	
	changeOldTitle(title){
		this.setState({oldTitle: title});
	}
	
	
	
	
	render(){
		console.log(this.state);
		if(this.state.view===true){
		return(
			<ScrollView style={{paddingTop: 22}}>
			<StartView changeView={this.changeView.bind(this)} sendTitleUp={this.getTitle.bind(this)} sendNoteUp={this.getNote.bind(this)} 
			sendImageUp={this.getImage.bind(this)} sfl={this.fromLoadedT.bind(this)} changeOldTitle={this.changeOldTitle.bind(this)}/>
			</ScrollView>);
		}else{
			return(
			<ScrollView style={{paddingTop: 22}}>
			<NoteView oldTitle={this.state.oldTitle} changeView={this.changeView.bind(this)} sendTitleUp={this.getTitle.bind(this)} sendNoteUp={this.getNote.bind(this)}
			sendImageUp={this.getImage.bind(this)} title={this.state.title} note={this.state.note} image={this.state.image} fl={this.state.fromLoaded} sfl={this.fromLoadedF.bind(this)}/>
			</ScrollView>
			);
		}
		
	}

}
