import { useState, useContext } from 'react';
import { NextPage } from "next";
import Link from "next/link";
import QuizCard from "../components/QuizCard";
import data from '../data/svelte-questions.json';
import globalContext from '../context/globalContext';
import FinishedQuiz from '../components/FinishedQuiz';

const SvelteQuiz: NextPage = () => {
  const [cardNumber, setCardNumber] = useState(0)
  const { isQuizFinished } = useContext(globalContext);
  return (
    <>
      <h1 style={{ width: '100%', margin: '0 auto'}}>Svelte - Quiz</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      {!isQuizFinished && data[cardNumber] ? (
        <QuizCard
          id={data[cardNumber].id}
          text={data[cardNumber].text}
          answerOptions={data[cardNumber].answerOptions}
          answer={data[cardNumber].answer}
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
        />
      ) : (
        <FinishedQuiz />
      )}
    </>
  )
}

export default SvelteQuiz