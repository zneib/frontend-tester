import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Option = styled.button<{ isCorrect: boolean }>`
  all: unset;
  border: 2px solid ${props => (props.isCorrect ? 'green' : '#eee')};
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
`

interface OptionBtnProps {
  selectedAnswer: string;
  text: string;
  key: number;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string>>
}


export default function OptionBtn({ selectedAnswer, text, key, setSelectedAnswer } : OptionBtnProps) {
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (selectedAnswer === text) {
      setIsCorrect(true)
    }
  }, [selectedAnswer, text])

  return (
    <Option isCorrect={isCorrect} type="button" key={key} onClick={() => setSelectedAnswer(text.toString())}>{text}</Option>
  )
}