import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default class Title extends React.Component{
	constructor(props){
		super(props);
		this.state={
			title: "",
		};
		
	}
	
	changeTitle(newTitle){
		this.setState({title: newTitle});
	
	}
	
	handleChange(newTitle){
		this.changeTitle(newTitle);
		this.props.sendTitleUp(newTitle);
	}
	
	render() {
		return(
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5 }}>
			<TextInput 
			placeholder="Write title here"
			style={{padding: 10, width: 280, backgroundColor: 'beige', fontWeight: 'bold', fontSize: 20}}
			onChangeText={(title) => this.handleChange(title)}
			/>
			</View>		
		);
	}
	
}