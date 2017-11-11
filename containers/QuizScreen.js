import React, { Component } from 'react';
import QuizView from '../components/QuizView';
import { View, Text } from 'react-native';
import ScoreScreen from '../containers/ScoreScreen';

export default class QuizScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 15,
      currentIndex: 0,
      score: 0,
      completeFlag: false,
      statusText: '',
      deck: props.navigation.state.params,
      questions:
        props.navigation.state.params[
          Object.keys(props.navigation.state.params)
        ].questions,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.updateStateOrReset();
    }, 1000);
  }

  render() {
    if (this.checkComplete()) {
      clearInterval(this.interval);
      return (
        <ScoreScreen
          score={this.state.score}
          scoreDeckPressed={() =>
            this.props.navigation.navigate('SingleDeckScreen', this.state.deck)}
          scoreRestartQuizPressed={() =>
            this.props.navigation.navigate('QuizScreen', this.state.deck)}
        />
      );
    } else {
      return (
        <QuizView
          questions={this.state.questions}
          secondsElapsed={this.state.secondsElapsed}
          currentQuestionIndex={this.state.currentIndex}
          quitPressed={() => this.props.navigation.navigate('DeckScreen')}
          submitPressed={this.validateAnswer}
          score={this.state.score}
          statusText={this.state.statusText}
          markedCorrect={this.markCorrect}
          markedIncorrect={this.markIncorrect}
          showAnswer={this.showAnswer}
        />
      );
    }
  }

  validateAnswer = givenAnswer => {
    const currentItem = this.state.questions[this.state.currentIndex];
    const key = Object.keys(currentItem);
    const correctAnswer = currentItem[key];
    console.log(correctAnswer);
    if (givenAnswer === correctAnswer) {
      this.setState(prev => {
        return {
          secondsElapsed: 15,
          currentIndex: prev.currentIndex + 1,
          score: prev.score + 1,
          statusText: 'Boom! correct',
        };
      });
    } else {
      this.setState({
        statusText: 'Nope! Try Again',
      });
    }
  };

  checkComplete = () => {
    return this.state.currentIndex === this.state.questions.length
      ? true
      : false;
  };

  markCorrect = () => {
    const currentItem = this.state.questions[this.state.currentIndex];
    const key = Object.keys(currentItem);
    const correctAnswer = currentItem[key];
    this.setState(prev => {
      return {
        secondsElapsed: 15,
        currentIndex: prev.currentIndex + 1,
        score: prev.score + 1,
        statusText: `Marked Correct, correct answer was ${correctAnswer}`,
      };
    });
  };

  markIncorrect = () => {
    const currentItem = this.state.questions[this.state.currentIndex];
    const key = Object.keys(currentItem);
    const correctAnswer = currentItem[key];
    this.setState(prev => {
      return {
        secondsElapsed: 15,
        currentIndex: prev.currentIndex + 1,
        score: prev.score - 1,
        statusText: `Marked wrong, correct answer was ${correctAnswer}`,
      };
    });
  };

  showAnswer = () => {
    const currentItem = this.state.questions[this.state.currentIndex];
    const key = Object.keys(currentItem);
    const correctAnswer = currentItem[key];
    this.setState({
      statusText: `Answer: ${correctAnswer}`,
    });
  };

  updateStateOrReset = () => {
    this.setState((prev, props) => {
      return prev.secondsElapsed !== 0
        ? {
            secondsElapsed: prev.secondsElapsed - 1,
            statusText: '',
          }
        : {
            secondsElapsed: 15,
            currentIndex: prev.currentIndex + 1,
          };
    });
  };
}
