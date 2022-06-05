import { createContext } from 'react';

interface GlobalContextInterface {
  score: number;
  numberOfQuestions: number;
  isQuizFinished: boolean;
  updateScore?: () => void;
  finishQuiz?: () => void;
}

const defaultState = {
  score: 0,
  numberOfQuestions: 0,
  isQuizFinished: false,
  updateScore: () => {},
  finishQuiz: () => {}
}

const globalContext = createContext<GlobalContextInterface>(defaultState);

export default globalContext;