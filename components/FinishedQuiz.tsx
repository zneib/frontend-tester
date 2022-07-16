import { useContext } from 'react';
import globalContext from '../context/globalContext';
import styled from 'styled-components';
import { CardWrapper, Button } from '../styles/sharedStyles';
import Link from "next/link";

const Header = styled.h1`
  width: 100%;
  margin: 0 auto;
`

interface FinishedQuizProps {
  finishFn: (() => void) | undefined;
}

export default function FinishedQuiz({ finishFn }: FinishedQuizProps) {
  const { score, resetQuiz } = useContext(globalContext);
  return (
    <CardWrapper finalCard={true}>
      <Header>Quiz Finished!</Header>
      <p>Your final score was: <span style={{ fontWeight: 'bold' }}>{score}</span></p>
      <Link href="/quizzes">
        <Button onClick={finishFn}>Finish</Button>
      </Link>
    </CardWrapper>
  )
}