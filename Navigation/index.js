import React from 'react';
import { StackNavigator } from 'react-navigation';
import DeckScreen from '../containers/DeckScreen';
import NewDeckScreen from '../containers/NewDeckScreen';
import AddQuestionScreen from '../containers/AddQuestion';
import SingleDeckScreen from '../containers/SingleDeckScreen';
import QuizScreen from '../containers/QuizScreen';
import { Constants } from 'expo';

const Navigation = StackNavigator({
  DeckScreen: {
    screen: DeckScreen,
    navigationOptions: {
      headerTitle: 'Decks',
      headerStyle: { marginTop: Constants.statusBarHeight },
    },
  },
  NewDeckScreen: {
    screen: NewDeckScreen,
    navigationOptions: {
      headerTitle: 'Add A Deck',
      headerStyle: { marginTop: Constants.statusBarHeight },
    },
  },
  AddQuestionScreen: {
    screen: AddQuestionScreen,
    navigationOptions: {
      headerTitle: 'Add a New Question',
      headerStyle: { marginTop: Constants.statusBarHeight },
    },
  },
  SingleDeckScreen: {
    screen: SingleDeckScreen,
    navigationOptions: {
      headerTitle: 'Your Deck',
      headerStyle: { marginTop: Constants.statusBarHeight },
    },
  },
  QuizScreen: {
    screen: QuizScreen,
    navigationOptions: {
      headerTitle: "Let's get Quizical",
      headerStyle: { marginTop: Constants.statusBarHeight },
    },
  },
});

export default Navigation;
