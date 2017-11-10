import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SingleDeckView from '../components/SingleDeckView';
import EmptyView from '../components/EmptyView';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

export default class SingleDeckScreen extends Component {
  render() {
    const { navigate, state } = this.props.navigation;
    const title = Object.keys(state.params)[0];
    const questions = state.params[Object.keys(state.params)].questions;
    const mainView =
      questions.length === 0 ? (
        <EmptyView
          emptyMessage="You got no questions"
          emptySubMessage="You want some?!"
        />
      ) : (
        <View>
          <Text style={styles.mainTitle}>{title}</Text>
        </View>
      );
    return (
      <View style={styles.container}>
        {mainView}
        <View style={styles.buttonContainer}>
          {questions.length >= 1 && <PrimaryButton title="Start a quiz" />}
          <SecondaryButton title="Add Question" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  mainTitle: {
    fontSize: 50,
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
