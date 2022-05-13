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

h1 {
  font-size: 4rem;
    color: #fff;
    margin-bottom: 5rem;
}
`;

export const PlayQuizContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;
`;

export const PlayQuizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  // justify-content: center;
  align-items: space-between;
  justify-content: space-between;
`;
export const QuizArea = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
`;
export const QuizItem = styled.div`
  /* background-color: yellow; */
`;

export const ProgressText = styled.p`
  text-align: center;
  font-size: 2rem;
`;
export const ProgressBar = styled.div`
  width: 20rem;
  height: 3rem;
  border: 0.2rem solid rgb(11, 223, 36);
  margin-top: 2rem;
  border-radius: 50px;
  overflow: hidden;
`;
export const ProgressBarFull = styled.div`
  height: 100%;
  background: rgb(11, 223, 36);
  width: 0%;
`;
export const QuizItemPrefix = styled.p`
  text-align: center;
  font-size: 2rem;
`;
export const QuizMainTextScore = styled.h1`
  text-align: center;
  font-size: 2rem;
`;
export const QuizQuestion = styled.h1`
  // margin-top: 3rem;
`;

export const ChoiceContainerUl = styled.ul`
  list-style: none;
`;

export const ChoiceContainerLi = styled.li`
  /* display: flex;
  margin-bottom: 0.8rem;
  width: 100%;
  border-radius: 4px;
  background: rgb(18, 93, 255);
  min-width: 80rem; */
  margin-top: 8px;
  /* background-color: rgb(18, 93, 255); */
  padding: 16px;
  border: 3px solid white;
  border-radius: 20px;
  font-size: 20px;
  background-color: ${({ color }) => color || "rgb(18, 93, 255)"};

  &.correct {
    background-color: green;
  }

  &.incorrect {
    background-color: red;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 0.4rem 1.4rem 0 rgba(6, 103, 247, 0.5);
    transform: scale(1.02);
    transform: transform 100ms;
  }

  @media screen and (max-width: 768px) {
    min-width: 40rem;
  }
`;
export const ChoicePrefix = styled.p`
  padding: 2rem 2.5rem;
  color: white;
  font-size: 1.5rem;
`;
export const ChoiceText = styled.p`
  padding: 2rem;
  width: 100%;
  font-size: 1.5rem;
`;

export const FinalResults = styled.div`
  background-color: red;
  margin: 0 auto;
  padding: 16px;
  border-radius: 16px;
  color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px --12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`;

export const FinalResultsH2 = styled.h2`
  font-size: 2rem;
`;

// correct and incorrect here
