import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export default function Deck(props) {
  return (
    <TouchableHighlight
      onPress={() => {
        props.handleDeckNavigation(props.name);
      }}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.name}</Text>
        <Text style={styles.text}>{props.cardsNumber} Cards</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderColor: '#fff',
    borderBottomColor: '#000',
    borderWidth: 2,
    width: 300,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
});
