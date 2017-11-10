import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

class AddQuestionView extends Component {
  state = {
    question: '',
    answer: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.questionTitle}>Add a New Question</Text>
        <View>
          <TextInput
            style={styles.questions}
            placeholder="Enter your question  here"
            onChangeText={text => this.setState({ question: text })}
          />
        </View>
        <View>
          <TextInput
            style={styles.answer}
            placeholder="Enter your answer here"
            onChangeText={text => this.setState({ answer: text })}
          />
        </View>
        <View style={styles.buttonRow}>
          <SecondaryButton
            title="Cancel"
            buttonPressed={e => this.props.onCancelPressed()}
          />
          <PrimaryButton
            title="Add"
            buttonPressed={e => this.props.onAddPressed(this.state)}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    display: 'flex',
    alignItems: 'center',
  },
  questionTitle: {
    fontSize: 50,
    textAlign: 'center',
  },
  questions: {
    marginTop: 30,
  },
  answer: {
    marginTop: 30,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 180,
    justifyContent: 'space-between',
    marginTop: 30,
  },
});

export default AddQuestionView;
