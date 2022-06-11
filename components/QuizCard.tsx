import { useState, useEffect, useContext } from 'react';
import globalContext from '../context/globalContext';
import styled from 'styled-components';
import OptionBtn from './OptionBtn';
import { CardWrapper } from '../styles/sharedStyles';

const CardNumber = styled.span`
  position: absolute;
  right: 15px;
  top: 10px;
  font-weight: bold;
`

const OptionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`

const NextBtn = styled.button`
  all: unset;
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid transparent;
  color: #0A558C;
  background-color: #DCEEFB;
  padding: 5px 10px;
  margin-top: 15px;
  font-size: 14px;
`

interface CardProps {
  id: number;
  text: string;
  answerOptions: string[] | boolean[];
  answer: string;
  cardNumber: number;
  setCardNumber: React.Dispatch<React.SetStateAction<number>>
}

export default function QuizCard({ id, text, answerOptions, answer, cardNumber, setCardNumber }: CardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [isAnswered, setIsAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const { 
    updateScore, 
    numberOfQuestions,
    isQuizFinished,
    finishQuiz
  } = useContext(globalContext);

  const handleNext = () => {
    if (selectedAnswer === answer.toString()) {
      updateScore?.()
    }
    setCardNumber(cardNumber + 1)
    setIsAnswered(false)
    setSelectedAnswer('')
  }

  const handleFinish = () => {
    if (selectedAnswer === answer.toString()) {
      updateScore?.()
    }
    finishQuiz?.()
  }

  useEffect(() => {
    if (selectedAnswer === answer && isAnswered) {
      setIsCorrect(true);
    } else if (selectedAnswer !== answer && isAnswered) {
      setIsCorrect(false);
    }
    if (selectedAnswer) {
      setIsAnswered(true);
    }
  }, [answer, isAnswered, selectedAnswer])

  return (
    <CardWrapper>
      <CardNumber>{id}</CardNumber>
      <p>{text}</p>
      <OptionsWrapper>
        {answerOptions?.length > 0 && answerOptions.map((option, index) => (
          <OptionBtn 
            answer={answer}
            selectedAnswer={selectedAnswer} 
            key={index} 
            setSelectedAnswer={setSelectedAnswer} 
            text={option.toString()} 
          />
        ))}
      </OptionsWrapper>
      {isCorrect && isAnswered && <p>That is correct!</p>}
      {!isCorrect && isAnswered && <p>That is incorrect.</p>}
      {isAnswered && id !== numberOfQuestions && <NextBtn type="button" onClick={handleNext}>NEXT</NextBtn>}
      {selectedAnswer && id === numberOfQuestions &&<NextBtn type="button" onClick={handleFinish}>FINISH</NextBtn>}
    </CardWrapper>
  )
}