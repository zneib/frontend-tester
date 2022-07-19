import { useReducer } from 'react';
import { globalReducer } from './globalReducer';
import GlobalContext from './globalContext';
import data from '../data/react-questions.json';

type Props = {
  children?: JSX.Element | JSX.Element[];
}

const GlobalState = ({ children }: Props) => {
  const intialState = {
    score: 0,
    numberOfQuestions: data.length,
    isQuizFinished: false,
    testResults: {
      react: 0,
      svelte: 0
    }
  }

  const [state, dispatch] = useReducer(globalReducer, intialState);

  const updateScore = () => {
    dispatch({
      type: 'update_score',
      payload: ''
    })
  }

  const finishQuiz = () => {
    dispatch({
      type: 'finish_quiz',
      payload: ''
    })
  }

  const resetQuiz = () => {
    dispatch({
      type: 'reset_quiz',
      payload: ''
    })
  }

  const setReactScore = () => {
    dispatch({
      type: 'set_global_react_score',
      payload: state.score
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        score: state.score,
        numberOfQuestions: state.numberOfQuestions,
        isQuizFinished: state.isQuizFinished,
        testResults: state.testResults,
        updateScore,
        finishQuiz,
        resetQuiz,
        setReactScore
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
};

export default GlobalState;
