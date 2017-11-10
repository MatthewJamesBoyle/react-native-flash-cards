import React from 'react';
import { StackNavigator } from 'react-navigation';
import DeckScreen from '../containers/DeckScreen';
import NewDeckScreen from '../containers/NewDeckScreen';
import AddQuestionScreen from '../containers/AddQuestion';
import SingleDeckScreen from '../containers/SingleDeckScreen';

const Navigation = StackNavigator({
  DeckScreen: {
    screen: DeckScreen,
    navigationOptions: {
      headerTitle: 'Decks',
    },
  },
  NewDeckScreen: {
    screen: NewDeckScreen,
    navigationOptions: {
      headerTitle: 'Add A Deck',
    },
  },
  AddQuestionScreen: {
    screen: AddQuestionScreen,
    navigationOptions: {
      headerTitle: 'Add a new question',
    },
  },
  SingleDeckScreen: {
    screen: SingleDeckScreen,
    navigationOptions: {
      headerTitle: 'Your Deck',
    },
  },
});

export default Navigation;
