import React from "react";
import {
  UniversalStyle,
  QuizPageContainer,
  QuizWrapper,
  QuizH1,
  QuizLink,
  QuizContentInfo,
  QuizImg,
} from "./QuizPageElements";
import imgQuiz from "../../images/svg-quiz.svg";

const QuizPage = () => {
  return (
    <QuizPageContainer>
      <UniversalStyle />
      <QuizWrapper>
        <QuizH1>
          Try not to choose answers randomly. We want to make sure your results
          are accurate.
        </QuizH1>
        <QuizImg src={imgQuiz} alt="quiz"></QuizImg>
        <QuizContentInfo>
          Quiz content is taken from grade 3, 4 and 5 textbooks.
        </QuizContentInfo>
      </QuizWrapper>
      <QuizLink to="/quizgame">Take the quiz</QuizLink>
    </QuizPageContainer>
  );
};

export default QuizPage;
