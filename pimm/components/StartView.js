import React from 'react';
import { Text, TextInput, View, Button, AsyncStorage, TouchableOpacity } from 'react-native';



export default class StartView extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            keys: [],
            notes: [],

        }
    }


    loadNote = async (key) => {
        this.props.changeOldTitle(key);
        this.props.sfl();
        this.props.changeView();
        try {
            let result = await AsyncStorage.getItem(key);
            if (result !== null) {
                let parsed=JSON.parse(result);
                this.props.sendTitleUp(parsed.title);
                this.props.sendNoteUp(parsed.note);
                this.props.sendImageUp(parsed.image);

            }
        } catch (error) {
            console.log(error);
        }


    };


    deleteNote = async (key) =>{
        try{
            await AsyncStorage.removeItem(key);
            console.log("Key deleted...")
            this.render();
        }catch(error){
            console.log(error);
        }
    };

    getKeys = async () =>{
        try {
            const a = await AsyncStorage.getAllKeys();
            if (this.state.keys !== a) {
                this.setState({keys: a});

            }


        } catch(error) {
            console.log(error);
        }
    };


    render(){
        this.getKeys();
        const keys=this.state.keys;
        const notes = keys.map((key) =>
            <View
                style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                    paddingRight: 40, paddingLeft: 40, paddingTop: 8, paddingBottom: 8, borderTopWidth: 1}}>

                <TouchableOpacity>
                    <Text
                        onPress={() => this.loadNote(key)}
                        style={{ fontWeight: 'bold', fontSize: 20 }}
                    >
                        {key}
                    </Text>
                </TouchableOpacity>

                <Button title="Delete" color='#B8860B' onPress={() => this.deleteNote(key)}/>
            </View>
        );

        return(
            <View>
                {notes}
                <Button title="Make new note" color='#B8860B' onPress={() => this.props.changeView()}/>
            </View>

        );
    }

}