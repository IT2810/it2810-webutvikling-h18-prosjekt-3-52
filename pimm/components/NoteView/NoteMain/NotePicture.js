import React from 'react';
import { Image, Button, View } from 'react-native';
import { ImagePicker } from 'expo';

export default class NotePicture extends React.Component{
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image that fits to your note"
          onPress={this.pickImage}
		  color="#B8860B"
		  
        />
		<View style={{ borderColor: 'black', borderWidth: 1, backgroundColor: 'beige', width: 280, height: 300 }}>
        <Image source={{ uri: image }} style={{ width: 280, height: 300 }} />
		</View>
      </View>
    );
  }
  
	componentWillReceiveProps(nextProps){
		if(this.props.image!==nextProps.image || nextProps.fl){
			this.setState({image: nextProps.image});
			this.props.sfl();
		}
	}

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
	  this.props.sendImageUp(result.uri);
	  
    }
	
  };
}