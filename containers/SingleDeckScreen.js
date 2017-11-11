import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import EmptyView from '../components/EmptyView';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

export default class SingleDeckScreen extends Component {
  render() {
    const { navigate, state } = this.props.navigation;
    const deck = state.params;
    const title = Object.keys(deck)[0];
    const questions = deck[Object.keys(deck)].questions;
    const mainView =
      questions.length === 0 ? (
        <EmptyView
          emptyMessage="You got no questions"
          emptySubMessage="You want some?!"
        />
      ) : (
        <View>
          <Text style={styles.mainTitle}>{`Your "${title}" Deck`}</Text>
          <Text style={styles.questionSub}>
            {`This deck contains ${questions.length} question(s)`}
          </Text>
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
              buttonPressed={e => navigate('QuizScreen', deck)}
            />
          )}
          <SecondaryButton
            title="Add Question"
            buttonPressed={e => navigate('AddQuestionScreen', deck)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 30,
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
  questionSub: {
    textAlign: 'center',
  },
  emoji: {
    textAlign: 'center',
    fontSize: 50,
    margin: 30,
  },
});
