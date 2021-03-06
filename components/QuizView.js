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
      markedCorrect,
      markedIncorrect,
      showAnswer,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.timer}>
            <Text>{`Time Remaining: ${secondsElapsed}`}</Text>
          </View>
          <View>
            <Text style={styles.score}>{`Score : ${this.props.score}`}</Text>
          </View>
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
          <PrimaryButton
            title="submit"
            buttonPressed={e => submitPressed(this.state.userAnswer)}
          />
          <PrimaryButton
            title="Mark Correct"
            buttonPressed={e => markedCorrect()}
          />
          <PrimaryButton
            title="Mark Incorrect"
            buttonPressed={e => markedIncorrect()}
          />
          <PrimaryButton
            title="Show Answer"
            buttonPressed={e => showAnswer()}
          />
          <SecondaryButton title="Quit" buttonPressed={quitPressed} />
        </View>
        <View>
          <Text>{`Questions Remaining: ${this.props.questions.length -
            1 -
            currentQuestionIndex}`}</Text>
        </View>
        <View>
          <Text>{this.props.statusText}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  sub: {
    marginTop: 8,
    fontSize: 10,
    textAlign: 'center',
  },
  question: {
    marginTop: 8,
    fontSize: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
  },
  answer: {
    width: 250,
    marginTop: 10,
    textAlign: 'center',
  },
  score: {
    marginLeft: 60,
  },
  topContainer: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
  },
});
