import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function DeckList(props) {
  const params = props.route.params;
  const {title} = params;
  const cardDeck = useSelector(state => state.decks[title]);
  const numberOfCards = cardDeck.questions.length;
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text>{title}</Text>
        <Text>{numberOfCards} Cards</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonSpacing}>
          <Button
            title="Add Card"
            onPress={() => {
              props.navigation.navigate('NewCard', {title});
            }}
          />
        </View>
        <View style={styles.buttonSpacing}>
          <Button
            title="Start Quiz"
            onPress={() => {
              props.navigation.navigate('StartQuiz', {title});
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  buttonContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSpacing: {
    paddingTop: 10,
    width: '30%',
  },
});
