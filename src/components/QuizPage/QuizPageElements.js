import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

export const UniversalStyle = createGlobalStyle`
:root {
  background-color: #fff;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 62.5%; 
    color: #000;
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
  border: 2px solid green;
`;

export const QuizH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 2rem;
  text-align: center;
`;

export const QuizContentInfo = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const QuizLink = styled(LinkR)`
  font-size: 2.4rem;
  padding: 2rem 0;
  width: 30rem;
  text-align: center;
  margin-bottom: 1rem;
  text-decoration: none;
  color: #fff;
  border-radius: 50px;

  background: linear-gradient(90deg, rgb(5, 170, 101) 0%, rgb(4, 153, 91) 100%);

  &:hover {
    cursor: pointer;
    box-shadow: 0 0.4rem 1.4rem 0 rgba(5, 216, 128, 0.3);
    transition: transform 150ms;
    transform: scale(1.03);
  }
`;
