import React, { Component } from 'react';
import AddDeckView from '../components/AddDeckView';
import { View, Alert } from 'react-native';

class NewDeckScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <AddDeckView
          onSubmitPress={this.processSubmit}
          backButtonPress={() => navigate('DeckScreen')}
        />
      </View>
    );
  }

  processSubmit = text => {
    console.log(text);
    if (text === undefined) {
      Alert.alert(
        'Error',
        "You didn't enter a deck title.",
        [
          {
            text: "Whatever, you can't tell me what to do!",
          },
        ],
        { cancelable: false },
      );
    }
  };
}

export default NewDeckScreen;
