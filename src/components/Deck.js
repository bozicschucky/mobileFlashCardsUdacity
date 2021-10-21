import React from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, StyleSheet, TouchableHighlight, Button} from 'react-native';

export default function Deck(props) {
  const dispatch = useDispatch();
  const name = props.name;
  const cardNumber = props.cardsNumber;
  const deleteDeck = () => {
    dispatch({
      type: 'DELETE_DECK',
      payload: {
        title: name,
      },
    });
  };
  return (
    <View>
      <TouchableHighlight
        onPress={() => {
          props.handleDeckNavigation(props.name);
        }}>
        <View style={styles.container}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{cardNumber} Cards</Text>
        </View>
      </TouchableHighlight>
      <Button title="Delete" onPress={deleteDeck} color="red" />
    </View>
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
