import { useContext } from 'react';
import globalContext from '../context/globalContext';
import styled from 'styled-components';
import { CardWrapper, Button } from '../styles/sharedStyles';
import Link from "next/link";

const Header = styled.h1`
  width: 100%;
  margin: 0 auto;
`

export default function FinishedQuiz() {
  const { score, resetQuiz } = useContext(globalContext);
  return (
    <CardWrapper finalCard={true}>
      <Header>Quiz Finished!</Header>
      <p>Your final score was: <span style={{ fontWeight: 'bold' }}>{score}</span></p>
      <Link href="/quizzes">
        <Button onClick={resetQuiz}>Finish</Button>
      </Link>
    </CardWrapper>
  )
}