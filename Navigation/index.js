import React from 'react';
import { StackNavigator } from 'react-navigation';
import DeckScreen from '../containers/DeckScreen';
import NewDeckScreen from '../containers/NewDeckScreen';

const Navigation = StackNavigator({
  DeckScreen: {
    screen: DeckScreen,
    navigationOptions: {
      headerTitle: 'DeckScreen',
    },
  },
  NewDeckScreen: {
    screen: NewDeckScreen,
    navigationOptions: {
      headerTitle: 'NewDeckScreen',
    },
  },
});

export default Navigation;
