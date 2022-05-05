import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

export const UniversalStyle = createGlobalStyle`
:root {
  background-color: rgb(29, 26, 26);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 62.5%; 
    color: #fff;
}
`;

export const QuizPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;
`;
export const QuizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //   background-color: red;
  justify-content: center;
  align-items: center;
`;

export const QuizH1 = styled.h1`
  font-size: 5.4rem;
  color: #fff;
  margin-bottom: 5rem;
`;

export const QuizLink = styled(LinkR)`
  font-size: 2.4rem;
  padding: 2rem 0;
  width: 30rem;
  text-align: center;
  margin-bottom: 1rem;
  text-decoration: none;
  color: rgb(28, 26, 26);
  border-radius: 4px;
  background: linear-gradient(
    90deg,
    rgb(18, 92, 255) 0%,
    rgb(0, 102, 255) 100%
  );

  &:hover {
    cursor: pointer;
    box-shadow: 0 0.4rem 1.4rem 0 rgba(8, 114, 244, 0.6);
    transition: transform 150ms;
    transform: scale(1.03);
  }
`;
