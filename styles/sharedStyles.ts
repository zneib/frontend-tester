import styled from 'styled-components';

export const CardWrapper = styled.div<{ finalCard?: boolean }>`
  width: 90%;
  padding: 15px 30px 30px;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
  border-radius: 5px;
  margin: 50px auto;
  ${props => props.finalCard && 'text-align: center'};
`