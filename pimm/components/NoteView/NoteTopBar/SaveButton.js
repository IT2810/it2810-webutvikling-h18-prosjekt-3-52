import React from 'react';
import { AsyncStorage } from "react-native";

class SaveButton extends Component{

}

_storeData = async () => {
  try {
    await AsyncStorage.setItem(this.props.title, this.props);
  } catch (error) {
    // Error saving data
    console.log("Couldn't save")
  }
}
