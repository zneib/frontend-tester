import { createContext } from 'react';

interface GlobalContextInterface {
  score: number;
  updateScore: () => void;
}

const globalContext = createContext<GlobalContextInterface | null>(null);

export default globalContext;