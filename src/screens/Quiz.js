import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, Button, StyleSheet} from 'react-native';
import {computePercentage} from '../utils/helpers';

export default function Quiz(props) {
  const title = props.route.params.title;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const questions = useSelector(state => state.decks[title].questions);
  const totalQuestions = questions.length;
  const [Answer, setAnswer] = useState(questions[questionIndex]['question']);
  const handleShowAnswer = answer => {
    if (answer === 'answer') {
      setAnswer(questions[questionIndex]['answer']);
      setShowQuestion(true);
    } else {
      setAnswer(questions[questionIndex]['question']);
      setShowQuestion(false);
    }
  };

  const handleCorrectClick = correctness => {
    let qtnIndex = questionIndex;
    qtnIndex++;
    if (qtnIndex <= totalQuestions - 1) {
      if (correctness === 'correct') {
        setCorrectAnswers(correctAnswers + 1);
        setQuestionIndex(qtnIndex);
      } else {
        setQuestionIndex(qtnIndex);
      }
    } else {
      setShowFinalMessage(true);
    }
  };
  return (
    <View style={gameStyles.container}>
      <View>
        <Text>
          {questionIndex + 1}/{totalQuestions}{' '}
        </Text>
        <Text>{correctAnswers}</Text>
        <Text>{Answer}</Text>
        {showFinalMessage ? (
          <View>
            <Text>QUIZ COMPLETED !! </Text>
            <Text>
              correctPercentage{' '}
              {computePercentage(correctAnswers, totalQuestions)}%
            </Text>
          </View>
        ) : (
          <Text></Text>
        )}

        {/* <View style={gameStyles.container}> */}
        {showQuestion ? (
          <Button
            title="Question"
            onPress={() => handleShowAnswer('question')}
          />
        ) : (
          <Button title="Answer" onPress={() => handleShowAnswer('answer')} />
        )}
        {/* </View> */}
      </View>
      <View>
        <Button
          title="Correct"
          onPress={() => {
            handleCorrectClick('correct');
          }}
        />
        <Button
          title="Incorrect"
          onPress={() => {
            handleCorrectClick('Incorrect');
          }}
        />
      </View>
    </View>
  );
}

const gameStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
