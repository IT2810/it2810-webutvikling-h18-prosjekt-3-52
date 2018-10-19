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
                <Title
                    sendTitleUp={this.props.sendTitleUp}
                    title={this.props.title} fl={this.props.fl}
                    sfl={this.props.sfl}/>

                <NoteText
                    sendNoteUp={this.props.sendNoteUp}
                    note={this.props.note}
                    fl={this.props.fl}
                    sfl={this.props.sfl}/>

                <NotePicture
                    sendImageUp={this.props.sendImageUp}
                    image={this.props.image}
                    fl={this.props.fl}
                    sfl={this.props.sfl}/>

            </View>

        );
    }
}