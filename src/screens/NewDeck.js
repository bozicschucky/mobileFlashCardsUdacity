import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {TextInput, Text, Button} from 'react-native-paper';

export default function NewDeck({navigation}) {
  const dispatch = useDispatch();
  const [deckName, setDeckName] = useState('');

  const handleDeckName = deckName => {
    setDeckName(deckName);
  };
  const handleNewDeckSubmit = () => {
    dispatch({type: 'ADD_NEW_DECK', payload: {title: deckName}});
    navigation.navigate('Decks');
  };
  return (
    <View>
      <View>
        <View style={style.textContainer}>
          <Text style={style.title}>What is the title of the New Deck</Text>
          <TextInput
            mode="flat"
            placeholder="Deck Name"
            onChangeText={handleDeckName}
            style={style.input}
          />
        </View>
        <View style={style.buttonContainer}>
          <Button
            title="Submit"
            theme={{roundness: 6}}
            raised
            dark
            onPress={handleNewDeckSubmit}
            mode="contained"
            style={style.button}>
            Submit
          </Button>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'normal',
    justifyContent: 'center',
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  input: {
    width: '70%',
    marginTop: 20,
  },
  button: {
    width: '70%',
    height: 50,
  },
  buttonContainer: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
