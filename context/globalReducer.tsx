interface GlobalState {
  score: number;
  numberOfQuestions: number;
  isQuizFinished: boolean;
  testResults: {react: number, svelte: number};
}

interface GlobalAction {
  type: string;
  payload: string | number;
}

export const globalReducer = (state: GlobalState, action: GlobalAction) => {
  switch(action.type) {
    case 'update_score':
      return {
        ...state,
        score: state.score + 1
      }
    case 'finish_quiz':
      return {
        ...state,
        isQuizFinished: true
      }
    case 'reset_quiz':
      return {
        ...state,
        isQuizFinished: false
      }
    case 'set_global_react_score':
      return {
        ...state,
        testResults: { react: action.payload, svelte: state.testResults['svelte']}
      }
    default:
      return state;
  }
};
