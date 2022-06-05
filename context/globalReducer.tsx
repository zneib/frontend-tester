interface GlobalState {
  score: number;
  numberOfQuestions: number;
  isQuizFinished: boolean;
}

interface GlobalAction {
  type: string;
  payload?: number;
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
    default:
      return state;
  }
};
