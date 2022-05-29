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
  flex-direction: column;
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
  border: 2px solid rgb(248, 244, 250);
  padding: 2rem;
  border-radius: 20px;
  background: rgba(248, 244, 250, 0.5);
  box-shadow: 0 0.4rem 1.4rem 0 rgba(227, 199, 242, 0.7);
`;

export const QuizH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 2rem;
  margin: 2rem 3rem 3rem 3rem;
  text-align: center;

  @media screen and (max-width: 281px) and (max-height: 654px) {
    font-size: 2rem;
    margin: 1rem;
  }
`;

export const QuizContentInfo = styled.div`
  font-size: 2rem;
  margin: 1rem 0;

  @media screen and (max-width: 1001px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 281px) and (max-height: 654px) {
    font-size: 2rem;
  }
`;

export const QuizImg = styled.img`
  width: 40%;
  margin: 2rem 0;
`;

export const QuizLink = styled(LinkR)`
  font-weight: 500;
  font-size: 2.4rem;
  padding: 2rem 0;
  width: 30rem;
  text-align: center;
  text-decoration: none;
  color: #fff;
  border-radius: 20px;
  margin-top: 3rem;
  background: linear-gradient(
    90deg,
    rgb(15, 190, 117) 0%,
    rgb(11, 181, 110) 100%
  );

  &:hover {
    cursor: pointer;
    box-shadow: 0 0.4rem 1.4rem 0 rgba(5, 216, 128, 0.3);
    transition: transform 150ms;
    transform: scale(1.03);
  }

  @media screen and (max-width: 1001px) {
    font-size: 2.7rem;
  }

  @media screen and (max-width: 281px) and (max-height: 654px) {
    font-size: 2rem;
    width: 20rem;
  }
`;
