import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Deck from '../components/Deck';
import EmptyView from '../components/EmptyView';
import StandardButton from '../components/StandardButton';

const DeckScreen = props => {
  const { navigate } = props.navigation;

  return (
    <View style={styles.container}>
      <View style={styles.empty}>
        <EmptyView
          style={styles.empty}
          emptyMessage="You haven't created any Decks yet!"
          emptySubMessage="Why not click the button below and create one?"
        />
      </View>
      <View style={styles.addDeckButton}>
        <StandardButton
          title="+"
          buttonPressed={() => navigate('NewDeckScreen')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 10,
  },
  empty: { flex: 9 },
  addDeckButton: {
    marginTop: 30,
    marginRight: 20,
    alignSelf: 'flex-end',
    flex: 1,
  },
});

export default DeckScreen;
