import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Deck from '../components/Deck';
import EmptyView from '../components/EmptyView';
import StandardButton from '../components/StandardButton';

class DeckScreen extends Component {
  state = {
    decks: [],
    loading: true,
  };

  componentWillMount() {
    this.prepareState();
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.loading) {
      return <View>Loading</View>;
    }
    if (this.state.decks.length === 0) {
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
    } else {
      return (
        <ScrollView>
          <View>
            {this.state.decks.map(deck => {
              if (!deck[Object.keys(deck)].title) {
                return;
              }
              return (
                <TouchableOpacity
                  key={Object.keys(deck)}
                  onPress={() => navigate('SingleDeckScreen', deck)}
                >
                  <Deck
                    title={deck[Object.keys(deck)].title}
                    body={`This Deck contains ${deck[Object.keys(deck)]
                      .questions
                      ? deck[Object.keys(deck)].questions.length
                      : 0} Questions`}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.addDeckButton}>
            <StandardButton
              title="+"
              buttonPressed={() => navigate('NewDeckScreen')}
            />
          </View>
        </ScrollView>
      );
    }
  }

  prepareState = () => {
    AsyncStorage.getAllKeys()
      .then(keys => {
        AsyncStorage.multiGet(keys, (err, stores) => {
          stores.map((result, i, store) => {
            const key = store[i][0];
            const value = JSON.parse(store[i][1]);
            this.setState({
              decks: [...this.state.decks, { [key]: value }],
            });
          });
        });
      })
      .catch(e => console.log(e));
    this.setState({
      loading: false,
    });
  };
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 10,
  },
  empty: { flex: 6 },
  addDeckButton: {
    marginTop: 30,
    marginRight: 20,
    alignSelf: 'flex-end',
    flex: 1,
  },
});

export default DeckScreen;
