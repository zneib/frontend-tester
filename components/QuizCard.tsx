import { useState, useEffect, useContext } from 'react';
import globalContext from '../context/globalContext';
import styles from './QuizCard.module.css';

interface CardProps {
  id: number;
  text: string;
  answerOptions: string[] | boolean[];
  answer: string | boolean;
  cardNumber: number;
  setCardNumber: React.Dispatch<React.SetStateAction<number>>
}

export default function QuizCard({ id, text, answerOptions, answer, cardNumber, setCardNumber }: CardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [isAnswered, setIsAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const { score, updateScore } = useContext(globalContext);

  console.log(score)

  useEffect(() => {
    if (selectedAnswer === answer.toString()) {
      setIsCorrect(true)
    }
    if (selectedAnswer) {
      setIsAnswered(true)
    }
  }, [answer, selectedAnswer])

  return (
    <div className={styles.cardWrapper}>
      <h2>{id}</h2>
      <p>{text}</p>
      <div className={styles.optionsWrapper}>
        {answerOptions?.length > 0 && answerOptions.map((option, index) => (
          <button className={styles.option} key={index} type="button" onClick={() => setSelectedAnswer(option.toString())}>{option.toString()}</button>
        ))}
      </div>
      {isAnswered && <button className={styles.nextBtn} type="button" onClick={() => setCardNumber(cardNumber + 1)}>NEXT</button>}
      <button type="button" onClick={updateScore}>Increment Score</button>
    </div>
  )
}