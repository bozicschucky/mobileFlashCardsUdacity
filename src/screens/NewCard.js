import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {View, TextInput, Button, StyleSheet} from 'react-native';
export default function NewCard(props) {
  const title = props.route.params.title;
  const navigation = props.navigation;
  const dispatch = useDispatch();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const handleQuestionInput = answer => {
    setQuestion(answer);
  };
  const handleAnswerInput = answer => {
    setAnswer(answer);
  };

  const handleNewCardSubmission = () => {
    const action = {type: 'ADD_CARD', payload: {question, answer, title}};
    dispatch(action);
    navigation.navigate('Decks');
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Enter Question"
          onChangeText={handleQuestionInput}
          placeholderTextColor="black"
        />
        <TextInput
          placeholder="Enter Answer"
          onChangeText={handleAnswerInput}
          placeholderTextColor="black"
        />
        <View>
          <Button title="Submit" onPress={handleNewCardSubmission} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
