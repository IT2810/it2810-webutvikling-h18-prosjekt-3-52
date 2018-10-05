import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default class Title extends React.Component{
	constructor(props){
		super(props);
		this.state={
			note: "",
		};
		
	}
	
	changeNote(newNote){
		this.setState({note: newNote});
	
	}
	
	render() {
		return(
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5 }}>
			<TextInput 
			placeholder="Write note here..."
			multiline = {true}
			//numberOfLines = {6}
			style={{padding: 5, width: 280, backgroundColor: 'beige'}}
			onChangeText={(note) => this.changeNote(note)}
			/>
			</View>		
		);
	}
	
}