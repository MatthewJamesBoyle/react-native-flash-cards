import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
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
          <Text style={styles.mainTitle}>{`Your "${title}" Deck`}</Text>
        </View>
      );
    return (
      <View style={styles.container}>
        {mainView}
        <Text style={styles.emoji}>🤔🤔🤔</Text>
        <View style={styles.buttonContainer}>
          {questions.length >= 1 && (
            <PrimaryButton
              title="Start a quiz"
              buttonPressed={e => navigate('QuizScreen', questions)}
            />
          )}
          <SecondaryButton
            title="Add Question"
            buttonPressed={e =>
              navigate('AddQuestionScreen', Object.keys(state.params))}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 70,
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
  emoji: {
    textAlign: 'center',
    fontSize: 50,
    margin: 50,
  },
});
