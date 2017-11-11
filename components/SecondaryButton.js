import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const SecondaryButton = props => (
  <TouchableOpacity style={styles.button} onPress={props.buttonPressed}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#d9534f',
    width: 160,
    height: 60,
    justifyContent: 'center',
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default SecondaryButton;
