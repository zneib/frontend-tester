import { useState } from 'react';
import { NextPage } from "next";
import Link from "next/link";
import QuizCard from "../components/QuizCard";

const data = [
  {
    id: 1,
    text: 'What is prop drilling in React?',
    answerOptions: [
      "Passing props continually down to more child components.",
      "A kind of prop type.",
      "A new React feature.",
      "A way to style React apps."
    ],
    answer: 'Passing props continually down to more child components.'
  },
  {
    id: 2,
    text: 'React includes a built in way to handle routing.',
    answerOptions: [true, false],
    answer: false,
  },
  {
    id: 3,
    text: 'React hooks were introduced in React version 16.8.0.',
    answerOptions: [true, false],
    answer: true
  }
]

const Quiz: NextPage = () => {
  const [cardNumber, setCardNumber] = useState(0)
  return (
    <>
      <h1>Quiz</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      {data[cardNumber] && (
        <QuizCard
          id={data[cardNumber].id}
          text={data[cardNumber].text}
          answerOptions={data[cardNumber].answerOptions}
          answer={data[cardNumber].answer}
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
        />
      )}
    </>
  )
}

export default Quiz