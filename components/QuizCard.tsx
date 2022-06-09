import { useState, useEffect, useContext } from 'react';
import globalContext from '../context/globalContext';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 90%;
  padding: 15px 30px 30px;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
  border-radius: 5px;
  margin: 50px auto;
`

const OptionsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`

const OptionBtn = styled.button`
  all: unset;
  border: 2px solid #eee;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
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
  answer: string | boolean;
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
    if (selectedAnswer === answer.toString()) {
      setIsCorrect(true);
    }
    if (selectedAnswer) {
      setIsAnswered(true);
    }
  }, [answer, selectedAnswer])

  return (
    <CardWrapper>
      <h2>{id}</h2>
      <p>{text}</p>
      <OptionsWrapper>
        {answerOptions?.length > 0 && answerOptions.map((option, index) => (
          <OptionBtn key={index} type="button" onClick={() => setSelectedAnswer(option.toString())}>{option.toString()}</OptionBtn>
        ))}
      </OptionsWrapper>
      {isAnswered && id !== numberOfQuestions && <NextBtn type="button" onClick={handleNext}>NEXT</NextBtn>}
      {selectedAnswer && id === numberOfQuestions &&<NextBtn type="button" onClick={handleFinish}>FINISH</NextBtn>}
    </CardWrapper>
  )
}