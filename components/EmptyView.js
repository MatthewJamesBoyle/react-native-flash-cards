import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmptyView = props => (
  <View style={styles.container}>
    <Text style={styles.topEmojiBar}>👎👎👎👎👎👎</Text>
    <Text style={styles.messageSize}>{props.emptyMessage}</Text>
    <Text style={styles.bottomEmojiBar}>😰😰😰😰😰</Text>
    <Text style={styles.subMessage}> {props.emptySubMessage}</Text>
  </View>
);

const standardText = {
  fontSize: 50,
  textAlign: 'center',
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },
  messageSize: standardText,
  subMessage: {
    paddingTop: 20,
    textAlign: 'center',
    color: '#d6d7da',
  },
  topEmojiBar: standardText,
  bottomEmojiBar: standardText,
});
export default EmptyView;
