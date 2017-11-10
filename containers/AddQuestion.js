import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AddQuestionView from '../components/AddQuestionView';

class AddQuestion extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return <AddQuestionView onCancelPressed={() => navigate('DeckScreen')} />;
  }
}

addButtonPressed = ({ question, answer }) => {};

export default AddQuestion;
