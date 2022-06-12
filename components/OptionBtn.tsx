import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Option = styled.button<{ isCorrect: boolean, isAnswered: boolean }>`
  all: unset;
  border: 2px solid #eee;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  /* ${props => (props.isCorrect && props.isAnswered ? 'border: 2px solid var(--correct)' : '#eee')};
  ${props => (!props.isCorrect && props.isAnswered ? 'border: 2px solid var(--incorrect)' : '#eee')}; */
`

interface OptionBtnProps {
  answer: string;
  cardsDisabled: boolean;
  selectedAnswer: string;
  text: string;
  key: number;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string>>
}


export default function OptionBtn({ answer, cardsDisabled, selectedAnswer, text, setSelectedAnswer } : OptionBtnProps) {
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (selectedAnswer === text && answer === text) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }, [answer, selectedAnswer, text])

  return (
    <Option disabled={cardsDisabled} isCorrect={isCorrect} isAnswered={selectedAnswer !== ''} type="button" onClick={() => setSelectedAnswer(text.toString())}>{text}</Option>
  )
}