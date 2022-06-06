import { useContext } from 'react';
import styles from './FinishedQuiz.module.css';
import globalContext from '../context/globalContext';

export default function FinishedQuiz() {
  const { score } = useContext(globalContext);
  return (
    <div className={styles.cardWrapper}>
      <p>You are finished!</p>
      <p>Your final score was: <span style={{ fontWeight: 'bold' }}>{score}</span></p>
    </div>
  )
}