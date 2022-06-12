import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Option = styled.button<{ isCorrect: boolean }>`
  all: unset;
  border: 2px solid ${props => (props.isCorrect ? 'green' : '#eee')};
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
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
    <Option disabled={cardsDisabled} isCorrect={isCorrect} type="button" onClick={() => setSelectedAnswer(text.toString())}>{text}</Option>
  )
}