import { NextPage } from "next"
import Link from "next/link"
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  place-items: center;
  justify-content: center;
  margin: 0 auto;
`

const LinkStyle = styled.a`
  background-color: #fafafa;
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 10px 15px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    border: 2px solid #ccc;
  }
`

const Quizzes: NextPage = () => {
  return (
    <Wrapper>
      <Link href="/react-quiz">
        <LinkStyle>Start React Quiz</LinkStyle>
      </Link>
      <Link href="/svelte-quiz">
        <LinkStyle>Start Svelte Quiz</LinkStyle>
      </Link>
    </Wrapper>
  )
}

export default Quizzes