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

const QuestionText = styled.p<{ disableText: boolean}>`
  opacity: ${props => props.disableText ? '0.2' : '1'};
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
  color: var(--gray-dark);
  background-color: var(--gray-ten);
  padding: 5px 10px;
  margin-top: 15px;
  font-size: 14px;
  &:hover {
    border: 2px solid var(--gray-four);
  }
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
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [cardsDisabled, setCardsDisabled] = useState(false);

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
    setCardsDisabled(false);
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
      setCardsDisabled(true);
    }
  }, [answer, isAnswered, selectedAnswer])

  return (
    <CardWrapper>
      <CardNumber>{id}</CardNumber>
      <QuestionText disableText={cardsDisabled}>{text}</QuestionText>
      <OptionsWrapper>
        {answerOptions?.length > 0 && answerOptions.map((option, index) => (
          <OptionBtn 
            answer={answer}
            cardsDisabled={cardsDisabled}
            selectedAnswer={selectedAnswer} 
            key={index} 
            setSelectedAnswer={setSelectedAnswer} 
            text={option.toString()} 
          />
        ))}
      </OptionsWrapper>
      {isCorrect && isAnswered && <p style={{ fontSize: '12px' }}>That is correct!</p>}
      {!isCorrect && isAnswered && <p style={{ fontSize: '12px'}}>That is incorrect.</p>}
      {isAnswered && id !== numberOfQuestions && <NextBtn type="button" onClick={handleNext}>NEXT</NextBtn>}
      {selectedAnswer && id === numberOfQuestions &&<NextBtn type="button" onClick={handleFinish}>FINISH</NextBtn>}
    </CardWrapper>
  )
}