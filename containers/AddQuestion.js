import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import AddQuestionView from '../components/AddQuestionView';
import { showAlert } from '../utils';

class AddQuestion extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <AddQuestionView
        onCancelPressed={() => navigate('DeckScreen')}
        onAddPressed={this.addButtonPressed}
      />
    );
  }
  addButtonPressed = ({ question, answer }) => {
    const { params } = this.props.navigation.state;
    const key = params[0];
    AsyncStorage.getItem(key).then(item => {
      const parsedItem = JSON.parse(item);
      const currentQs = parsedItem.questions;
      const newQs = [...currentQs, { [question]: answer }];
      parsedItem.questions = newQs;
      const updatedItem = JSON.stringify(parsedItem);
      AsyncStorage.mergeItem(key, updatedItem, (err, result) => {
        showAlert('Boom!', 'question Added!', '...ok');
        this.props.navigation.navigate('DeckScreen');
      });
    });
  };
}

export default AddQuestion;
