import { useState, useEffect } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 90%;
  padding: 15px 30px 30px;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
  border-radius: 5px;
  margin: 50px auto;
  & > h2 {
    margin: 0;
  }
`

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`

const Option = styled.button`
  all: unset;
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    border: 2px solid #003E6B;
  }
`

const NextBtn = styled.button`
  all: unset;
  cursor: pointer;
  border-radius: 5px;
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
  setCardNumber: (a: number) => number
}

export default function QuizCard({ id, text, answerOptions, answer, setCardNumber }: CardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [isAnswered, setIsAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  useEffect(() => {
    if (selectedAnswer === answer.toString()) {
      setIsCorrect(true)
    }
    if (selectedAnswer) {
      setIsAnswered(true)
    }
  }, [answer, selectedAnswer])

  return (
    <CardWrapper>
      <h2>{id}</h2>
      <p>{text}</p>
      <OptionsContainer>
        {answerOptions?.length > 0 && answerOptions.map((option, index) => (
          <Option key={index} type="button" onClick={() => setSelectedAnswer(option.toString())}>{option.toString()}</Option>
        ))}
      </OptionsContainer>
      {isAnswered && <NextBtn onClick={() => setCardNumber(id + 1)}>NEXT</NextBtn>}
    </CardWrapper>
  )
}