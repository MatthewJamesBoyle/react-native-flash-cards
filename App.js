import React from 'react';
import { View } from 'react-native';
import Navigation from './Navigation';
import { setLocalNotification } from './utils';

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return <Navigation />;
  }
}
