import React from 'react';
import SaveButton from './NoteTopBar/SaveButton.js';
import BackButton from './NoteTopBar/BackButton.js';
import { View, Text } from 'react-native';

export default class NoteTopBar extends React.Component{
	
	
	render(){
		return(
			<View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
			paddingRight: 40, paddingLeft: 40, paddingTop: 8}}>
			<BackButton changeView={this.props.changeView}/>
			<SaveButton oldTitle={this.props.oldTitle} saveNote={this.props.saveNote} title={this.props.title} note={this.props.note} image={this.props.image}/>		
			</View>
			
		);
	}
}