import Link from "next/link";
import styled from 'styled-components';

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 15px 25px;
  background: #fff;
  box-shadow: 0px 2px 8px 2px rgba(0,0,0,0.2);
  margin-bottom: 100px;
`

export default function Nav() {
  return (
    <NavWrapper>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/quizzes">
        <a>Quizzes</a>
      </Link>
      <Link href="/results">
        <a>Results</a>
      </Link>
      <Link href="/">
        <a>About</a>
      </Link>
      <Link href="/faq">
        <a>FAQ</a>
      </Link>
    </NavWrapper>
  )
}