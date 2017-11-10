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
          <SecondaryButton
            title="Go Back"
            buttonPressed={e => this.props.backButtonPress()}
          />
          <PrimaryButton
            title="Submit"
            buttonPressed={() => this.props.onSubmitPress(this.state.deckTitle)}
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
    backgroundColor: 'white',
    height: 30,
    width: 250,
    marginTop: 50,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 180,
    justifyContent: 'space-between',
    marginTop: 30,
  },
});
