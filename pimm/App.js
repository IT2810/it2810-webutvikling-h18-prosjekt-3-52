import React from 'react';
import { Platform, StatusBar, StyleSheet, ScrollView } from 'react-native';
import NotePicture from './components/NoteView/NoteMain/NotePicture.js';
import Title from './components/NoteView/NoteMain/Title.js';


export default class App extends React.Component {
	
	render(){
		return(
		<ScrollView>	
		<Title/>
		<NotePicture/>
		</ScrollView>
		);
	}
 
}
