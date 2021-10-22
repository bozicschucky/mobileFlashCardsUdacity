import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Button, Text, Card, Paragraph, Divider} from 'react-native-paper';
import {computePercentage} from '../utils/helpers';

export default function Quiz(props) {
  const title = props.route.params.title;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const questions = useSelector(state => state.decks[title].questions);
  const totalQuestions = questions.length;

  const [Answer, setAnswer] = useState(
    questions[questionIndex] && questions[questionIndex]['question'],
  );
  const handleShowAnswer = answer => {
    if (answer === 'answer') {
      setAnswer(questions[questionIndex] && questions[questionIndex]['answer']);
      setShowQuestion(true);
    } else {
      setAnswer(
        questions[questionIndex] && questions[questionIndex]['question'],
      );
      setShowQuestion(false);
    }
  };

  const handleCorrectClick = correctness => {
    if (questionIndex <= totalQuestions - 1) {
      if (correctness === 'correct') {
        setCorrectAnswers(correctAnswers + 1);
        setQuestionIndex(questionIndex + 1);
      } else {
        setQuestionIndex(questionIndex + 1);
      }
      if (questionIndex === totalQuestions - 1) {
        setShowFinalMessage(true);
      }
    }
  };
  return (
    <View>
      <View style={gameStyles.container}>
        <View>
          <Card mode="outlined" style={gameStyles.card}>
            <Card.Title subtitle="Select a Question and Answer" />
            <Card.Content>
              <Paragraph>
                {' '}
                {questionIndex}/{totalQuestions} Questions
              </Paragraph>
              {/* <Paragraph>{correctAnswers} Correct Answers</Paragraph> */}
              <Paragraph>
                <Text>{Answer}</Text>
              </Paragraph>
              <Paragraph></Paragraph>
              <Paragraph style={{paddingTop: 20}}>
                {showFinalMessage ? (
                  <View>
                    <Paragraph>QUIZ COMPLETED !! </Paragraph>
                    <Paragraph>
                      Correct Score:{' '}
                      {computePercentage(correctAnswers, totalQuestions)}%
                    </Paragraph>
                  </View>
                ) : (
                  <Paragraph></Paragraph>
                )}
              </Paragraph>
            </Card.Content>
          </Card>
          <Divider />
        </View>
      </View>
      <View style={gameStyles.btnContainer}>
        {showQuestion ? (
          <Button
            dark
            title="Question"
            mode="contained"
            onPress={() => handleShowAnswer('question')}
            style={gameStyles.btn}>
            Question
          </Button>
        ) : (
          <Button
            mode="contained"
            title="Answer"
            dark
            onPress={() => handleShowAnswer('answer')}
            style={gameStyles.btn}>
            Answer
          </Button>
        )}
        <Button
          mode="contained"
          dark
          onPress={() => {
            handleCorrectClick('correct');
          }}
          style={gameStyles.btn}>
          Correct
        </Button>
        <Button
          mode="contained"
          dark
          onPress={() => {
            handleCorrectClick('Incorrect');
          }}>
          Incorrect
        </Button>
      </View>
    </View>
  );
}

const gameStyles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
  },
  btn: {
    marginBottom: 10,
  },
  btnContainer: {
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
