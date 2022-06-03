interface GlobalState {
  score: number;
}

interface GlobalAction {
  type: string;
  payload: number;
}

export const globalReducer = (state: GlobalState, action: GlobalAction) => {
  switch(action.type) {
    default:
      return state;
  }
};
