import React, { Component } from 'react';
import AddDeckView from '../components/AddDeckView';
import { View, Alert, AsyncStorage } from 'react-native';
import { showAlert } from '../utils';

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

  processSubmit = async deckTitle => {
    if (deckTitle === undefined) {
      showAlert(
        'Error',
        "You didn't enter a deck title",
        "Whatever, you can't tell me what to do!",
      );
    } else {
      const added = await tryToAddToStorage(deckTitle);
      if (added) {
        showAlert('Nice!', 'Created a new deck', 'Time to Study!');
        this.props.navigation.navigate('DeckScreen');
      } else {
        showAlert(
          'Error',
          'You already have a deck with this title',
          'Nice Error Handling Matt!',
        );
      }
    }
  };
}

tryToAddToStorage = async deckTitle => {
  //to lowercase and remove space.
  const lower = deckTitle.toLowerCase().replace(/\s+/g, '');
  const exists = await AsyncStorage.getItem(lower);
  if (exists) {
    return false;
  } else {
    try {
      await AsyncStorage.setItem(
        lower,
        JSON.stringify({ title: deckTitle, questions: [] }),
      );
    } catch (error) {
      console.log(e);
    }
    return true;
  }
};
export default NewDeckScreen;
