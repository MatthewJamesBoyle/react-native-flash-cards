import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const StandardButton = props => (
  <TouchableOpacity style={styles.button} onPress={props.buttonPressed}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    width: 70,
    height: 70,
    borderRadius: 100 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default StandardButton;
