import React, { Component } from 'react';
import QuizView from '../components/QuizView';
import ScoreScreen from '../containers/ScoreScreen';

export default class QuizScreen extends Component {
  state = {
    secondsElapsed: 15,
    currentIndex: 0,
    score: 0,
    completeFlag: false,
    statusText: '',
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.updateStateOrReset();
    }, 50);
  }

  render() {
    if (this.state.completeFlag) {
      return (
        <ScoreScreen
          score={this.state.score}
          scoreHomePressed={() => this.props.navigation.navigate('DeckScreen')}
        />
      );
    } else {
      return (
        <QuizView
          questions={this.props.navigation.state.params}
          secondsElapsed={this.state.secondsElapsed}
          currentQuestionIndex={this.state.currentIndex}
          quitPressed={() => this.props.navigation.navigate('DeckScreen')}
          submitPressed={this.validateAnswer}
          score={this.state.score}
          statusText={this.state.statusText}
        />
      );
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  validateAnswer = givenAnswer => {
    const currentItem = this.props.navigation.state.params[
      this.state.currentIndex
    ];
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
    this.setState({
      completeFlag:
        this.state.currentIndex ===
        this.props.navigation.state.params.length - 1
          ? true
          : false,
    });
  };

  updateStateOrReset = () => {
    this.checkComplete();
    if (this.state.completeFlag) {
      return;
    }
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
