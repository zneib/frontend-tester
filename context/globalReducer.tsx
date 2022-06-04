interface GlobalState {
  score: number;
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
    default:
      return state;
  }
};
