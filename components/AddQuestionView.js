import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

const AddQuestionView = props => (
  <View style={styles.container}>
    <Text style={styles.questionTitle}>Add a New Question</Text>
    <View>
      <TextInput
        style={styles.questions}
        placeholder="Enter your question title here"
        onChangeText={text => this.setState({ deckTitle: text })}
      />
    </View>
    <View>
      <TextInput
        style={styles.answer}
        placeholder="Enter your question answer here"
        onChangeText={text => this.setState({ deckTitle: text })}
      />
    </View>
    <View style={styles.buttonRow}>
      <SecondaryButton
        title="Cancel"
        buttonPressed={e => props.onCancelPressed()}
      />
      <PrimaryButton title="Add" />
    </View>
  </View>
);

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
