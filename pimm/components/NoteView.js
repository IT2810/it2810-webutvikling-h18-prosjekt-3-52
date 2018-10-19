import React from 'react';
import NoteMain from './NoteView/NoteMain.js';
import NoteTopBar from './NoteView/NoteTopBar.js';
import { View } from 'react-native';

export default class NoteView extends React.Component{
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
                <NoteTopBar
                    oldTitle={this.props.oldTitle}
                    changeView={this.props.changeView}
                    saveNote={this.props.saveNote}
                    title={this.props.title} note={this.props.note}
                    image={this.props.image}/>

                <NoteMain
                    sendTitleUp={this.props.sendTitleUp}
                    sendNoteUp={this.props.sendNoteUp}
                    sendImageUp={this.props.sendImageUp}
                    title={this.props.title}
                    note={this.props.note}
                    image={this.props.image}
                    fl={this.props.fl}
                    sfl={this.props.sfl}/>

            </View>

        );
    }
}