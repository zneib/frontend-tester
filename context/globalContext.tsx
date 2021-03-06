import { createContext } from 'react';

interface GlobalContextInterface {
  score: number;
  numberOfQuestions: number;
  isQuizFinished: boolean;
  testResults: {react: number, svelte: number};
  updateScore?: () => void;
  finishQuiz?: () => void;
  resetQuiz?: () => void;
  setReactScore?: () => void;
}

const defaultState = {
  score: 0,
  numberOfQuestions: 0,
  isQuizFinished: false,
  updateScore: () => {},
  finishQuiz: () => {},
  resetQuiz: () => {},
  setReactScore: () => {}
}

const globalContext = createContext<GlobalContextInterface>(defaultState);

export default globalContext;