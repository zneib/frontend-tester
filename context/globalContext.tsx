import { createContext } from 'react';

interface GlobalContextInterface {
  score: number;
}

const globalContext = createContext<GlobalContextInterface | null>(null);

export default globalContext;