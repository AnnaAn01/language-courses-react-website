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

h1 {
  font-size: 4rem;
    color: #000;
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
  align-items: space-between;
  justify-content: space-between;
  background: rgba(248, 244, 250, 1);
  padding: 4rem 8rem;
  border-radius: 20px;
  box-shadow: 0.1rem 0.4rem 1.4rem 0.4rem rgba(227, 199, 242, 0.8);
  /* background-color: red; */

  @media screen and (max-width: 1001px) {
    min-width: 90vw;
  }

  width: 100%;
  @media screen and (max-width: 451px) {
    padding: 2rem 1rem 3rem 1rem;
    align-items: center;
    justify-content: center;
  }
`;
export const QuizArea = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: red; */
`;
export const QuizItem = styled.div`
  /* background-color: yellow; */
  width: 100%;
`;

export const ProgressText = styled.p`
  text-align: center;
  font-size: 2rem;
  color: #016f71;
  font-weight: bold;

  @media screen and (max-width: 1001px) {
    font-size: 2.3rem;
  }

  @media screen and (max-width: 451px) {
    /* padding: 2rem 1rem 3rem 1rem; */
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
  }
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
  color: #016f71;
  font-weight: bold;
  /* background-color: yellow; */

  @media screen and (max-width: 1001px) {
    font-size: 2.1rem;
  }

  @media screen and (max-width: 451px) {
    font-size: 1.8rem;
  }
`;
export const QuizMainTextScore = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #016f71;
  font-weight: bold;
  /* background-color: yellow; */

  @media screen and (max-width: 451px) {
    font-size: 1.8rem;
  }
`;
export const QuizQuestion = styled.h1`
  @media screen and (max-width: 451px) {
    font-size: 2.7rem;
  }

  @media screen and (max-width: 451px) {
    /* padding: 2rem 1rem 3rem 1rem; */
    text-align: center;
  }
`;

export const ChoiceContainerUl = styled.ul`
  list-style: none;
  text-align: center;
`;

export const ChoiceContainerLi = styled.li`
  margin-top: 8px;

  padding: 16px;
  border: 3px solid white;
  border-radius: 20px;
  font-size: 20px;

  &.correct {
    background-color: #2ec52e;
  }

  &.incorrect {
    background-color: #f96464;
  }

  &.default {
    background-color: rgba(209, 126, 254, 0.7);
  }
  &:hover {
    cursor: pointer;

    transform: scale(1.05);
    transform: transform 100ms;
  }
  @media screen and (max-width: 1001px) {
    font-size: 3.5rem;
    &:hover {
      cursor: pointer;

      transform: scale(1);
      transform: transform 100ms;
    }
  }

  @media screen and (max-width: 768px) {
    width: 50vw;
  }

  @media screen and (max-width: 451px) {
    padding: 2rem 1rem 3rem 1rem;
    align-items: center;
    justify-content: center;
    width: 80vw;
    font-size: 2.5rem;
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

export const FinalResultsContainer = styled.div`
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;
  margin: 0 auto;
  padding: 30px;
  border-radius: 16px;
  color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px --12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;

  @media screen and (max-width: 281px) and (max-height: 654px) {
  }
`;

export const FinalResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(248, 244, 250);
  padding: 2rem;
  border-radius: 20px;
  background: rgba(248, 244, 250, 0.5);
  box-shadow: 0 0.4rem 1.4rem 0 rgba(227, 199, 242, 0.7);

  @media screen and (max-width: 281px) and (max-height: 654px) {
    margin-top: 5rem;
    padding-top: 0rem;
    width: 100%;
  }
`;

export const FinalResultsH2 = styled.h2`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 2rem;
  margin: 2rem 3rem 3rem 3rem;
  text-align: center;

  @media screen and (max-width: 281px) and (max-height: 654px) {
    font-size: 2rem;
    margin-top: 1rem;
    padding-top: 0rem;
  }
`;

export const FinalResultsImg = styled.img`
  width: 30%;
  margin: 2rem 0;

  @media screen and (max-width: 1001px) {
    width: 40%;
  }

  @media screen and (max-width: 281px) and (max-height: 654px) {
    display: none;
  }
`;

export const FinalResultsInfo = styled.div`
  font-size: 2rem;
  margin: 1rem 0;

  @media screen and (max-width: 1001px) {
    font-size: 3.5rem;
  }

  @media screen and (max-width: 281px) and (max-height: 654px) {
    font-size: 2rem;
  }
`;
// correct and incorrect here
export const FinalResultBtnContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 451px) {
  }

  @media screen and (max-width: 281px) and (max-height: 654px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;

export const FinalResultsLink = styled(LinkR)`
  font-weight: 500;
  font-size: 2.4rem;
  padding: 2rem 0;
  width: 25rem;
  text-align: center;
  text-decoration: none;
  color: #000;
  border-radius: 20px;
  margin-top: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
  background: rgb(208, 122, 255);

  &:hover {
    cursor: pointer;
    box-shadow: 0 0.4rem 1.4rem 0 rgba(5, 216, 128, 0.3);
    transition: transform 150ms;
    transform: scale(1.03);
  }

  @media screen and (max-width: 1001px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 451px) {
    font-size: 1.8rem;
    padding: 10px;
    width: 15rem;
    margin: 50px 10px;
  }

  @media screen and (max-width: 281px) and (max-height: 654px) {
    margin: 10px 10px 10px 10px;
    padding: 20px;
  }
`;
