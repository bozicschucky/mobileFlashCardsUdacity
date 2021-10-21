import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  decks: {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces',
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event',
        },
      ],
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer:
            'The combination of a function and the lexical environment within which that function was declared.',
        },
      ],
    },
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: {
    ADD_CARD: (state, action) => {
      const {title, question, answer} = action.payload;
      state.decks[title] = {
        title,
        questions: [...state.decks[title].questions, {question, answer}],
      };
    },
  },
});

export default appSlice.reducer;
