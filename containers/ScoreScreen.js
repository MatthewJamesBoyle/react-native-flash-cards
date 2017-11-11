import React, { Component } from 'react';
import ScoreView from '../components/ScoreView';
import { View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default class ScoreScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScoreView score={this.props.score} />
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Go Home"
            buttonPressed={this.props.scoreHomePressed}
          />
          <PrimaryButton
            title="Quiz again"
            buttonPressed={this.props.scoreRestartQuizPressed}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: 'row',
  },
});
