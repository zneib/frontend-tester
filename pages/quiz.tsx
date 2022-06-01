import { NextPage } from "next";
import Link from "next/link";

const data = [
  {
    id: 1,
    question: 'What is a prop in React?',
    answer: 'A prop is a dynamic piece of information passed into React components.'
  },
  {
    id: 2,
    question: 'True or False. React includes a built in way to handle routing.',
    answer: 'false'
  },
  {
    id: 3,
    question: 'True or False. React hooks were introduced in React version 16.8.0.',
    answer: 'true'
  }
]

const Quiz: NextPage = () => {
  return (
    <>
      <h1>Quiz</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      {data?.length > 0 && data.map((question) => (
        <p key={question.id}>{question.id}</p>
      ))}
    </>
  )
}

export default Quiz