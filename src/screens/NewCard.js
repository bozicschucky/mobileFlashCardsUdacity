import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
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
    <View>
      <View>
        <TextInput
          mode="flat"
          placeholder="Enter Question"
          onChangeText={handleQuestionInput}
        />
        <TextInput
          mode="flat"
          placeholder="Enter Answer"
          onChangeText={handleAnswerInput}
        />
        <View style={styles.buttonContainer}>
          <Button
            raised
            dark
            theme={{roundness: 6}}
            mode="contained"
            onPress={handleNewCardSubmission}
            style={styles.button}>
            Submit
          </Button>
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
  button: {
    marginTop: 10,
    width: '30%',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
