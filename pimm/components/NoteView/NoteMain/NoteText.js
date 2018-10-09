import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default class NoteText extends React.Component{
	constructor(props){
		super(props);
		this.state={
			note: "",
		};
		
	}
	
	changeNote(newNote){
		this.setState({note: newNote});
	
	}
	
	handleChange(newNote){
		this.changeNote(newNote);
		this.props.sendNoteUp(newNote);
	}
	
	componentWillReceiveProps(nextProps){
		if(this.props.note!==nextProps.note){
			this.setState({note: nextProps.note});
		}
	}
	
	render() {
		return(
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5 }}>
			<TextInput 
			placeholder="Write note here..."
			multiline = {true}
			style={{padding: 5, width: 280, backgroundColor: 'beige'}}
			onChangeText={(note) => this.handleChange(note)}
			value={this.state.note}
			/>
			</View>		
		);
	}
	
}