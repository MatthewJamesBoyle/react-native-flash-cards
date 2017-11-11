import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Deck = props => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
    <View />
    <Text style={styles.cardBody}>{props.body}</Text>
  </View>
);

export default Deck;

const styles = StyleSheet.create({
  card: {
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#fff',
    display: 'flex',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 40,
    paddingBottom: 40,
    minHeight: 150,
  },
  cardHeader: {
    borderColor: '#d6d7da',
    borderWidth: 0.5,
  },
  cardBody: {
    color: '#d6d7da',
    padding: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
});
