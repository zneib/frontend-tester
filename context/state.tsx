import { AppContext } from 'next/app';
import { createContext, useContext } from 'react';

interface AppContextInterface {
  score: number;
}

const AppContext = createContext<AppContextInterface | null>(null);

const sharedAppContext: AppContextInterface = {
  score: 0
}

type Props = {
  children?: JSX.Element | JSX.Element[];
}

export const App = ({ children }: Props) => (
  <AppContext.Provider value={sharedAppContext}>
    {children}
  </AppContext.Provider>
);
