import { createContext } from 'react';

interface GlobalContextInterface {
  score: number;
  numberOfQuestions: number;
  isQuizFinished: boolean;
  updateScore: () => void;
  finishQuiz: () => void;
}

const globalContext = createContext<GlobalContextInterface | null>(null);

export default globalContext;