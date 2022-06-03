import { useReducer } from 'react';
import { globalReducer } from './globalReducer';
import GlobalContext from './globalContext';

type Props = {
  children?: JSX.Element | JSX.Element[];
}

const GlobalState = ({ children }: Props) => {
  const intialState = {
    score: 0
  }

  const [state, dispatch] = useReducer(globalReducer, intialState);

  return (
    <GlobalContext.Provider
      value={{
        score: state.score
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
};

export default GlobalState;