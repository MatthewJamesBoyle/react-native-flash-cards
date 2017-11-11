import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

export default class AddDeckView extends Component {
  state = {
    deckTitle: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Great! What is the title of your new deck?
        </Text>
        <View style={styles.enterDeckBox}>
          <TextInput
            placeholder="Enter Deck Title Here."
            onChangeText={text => this.setState({ deckTitle: text })}
          />
        </View>
        <View style={styles.buttonRow}>
          <PrimaryButton
            title="Submit"
            buttonPressed={() => this.props.onSubmitPress(this.state.deckTitle)}
          />
          <SecondaryButton
            title="Go Back"
            buttonPressed={e => this.props.backButtonPress()}
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
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  enterDeckBox: {
    width: 250,
    marginTop: 50,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
});
