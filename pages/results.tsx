import { useContext } from 'react';
import { NextPage } from "next";
import globalContext from '../context/globalContext';

const Results: NextPage = () => {
  const { testResults } = useContext(globalContext);
  return (
    <div>
      <p>Last React Quiz Score: {testResults?.react}</p>
      <p>Last Svelte Quiz Score: {testResults?.svelte}</p>
    </div>
  )
}

export default Results