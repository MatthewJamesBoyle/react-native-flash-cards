import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScoreView = props => (
  <View style={styles.container}>
    <View>
      <Text style={styles.title}>Great Job On Studying! 👍</Text>
    </View>
    <View style={styles.scoreSection}>
      <Text style={styles.scoreText}>You Scored: {props.score}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  title: {
    textAlign: 'center',
    fontSize: 50,
  },
  scoreSection: {
    marginTop: 30,
  },
  scoreText: {
    textAlign: 'center',
    fontSize: 30,
  },
});

export default ScoreView;
