import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

export default class QuizView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      userAnswer: '',
    };
  }
  render() {
    const {
      questions,
      currentQuestionIndex,
      secondsElapsed,
      quitPressed,
      submitPressed,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.timer}>
          <Text>{`Time Remaining: ${secondsElapsed}`}</Text>
        </View>
        <View>
          <Text style={styles.sub}>
            (You Have 15 seconds to answer each question.)
          </Text>
        </View>
        <View>
          <Text style={styles.question}>{`${Object.keys(
            questions[currentQuestionIndex],
          )}?`}</Text>
        </View>
        <TextInput
          style={styles.answer}
          placeholder="Enter your Answer Here"
          onChangeText={text => this.setState({ userAnswer: text })}
        />
        <View />
        <View style={styles.buttonContainer}>
          <SecondaryButton title="Quit" buttonPressed={quitPressed} />
          <PrimaryButton
            title="submit"
            buttonPressed={e => submitPressed(this.state.userAnswer)}
          />
        </View>
        <View>
          <Text style={styles.score}>{`Score : ${this.props.score}`}</Text>
        </View>
        <View>
          <Text style={styles.score}>{this.props.statusText}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  sub: {
    fontSize: 10,
    textAlign: 'center',
  },
  question: {
    fontSize: 50,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
  },
  score: {
    marginTop: 30,
  },
});
