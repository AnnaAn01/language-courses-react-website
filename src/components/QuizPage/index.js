import React from "react";
import {
  UniversalStyle,
  QuizPageContainer,
  QuizWrapper,
  QuizH1,
  QuizLink,
} from "./QuizPageElements";

const QuizPage = () => {
  return (
    <QuizPageContainer>
      <UniversalStyle />
      <QuizWrapper>
        <QuizH1>Are You Ready?</QuizH1>
        <QuizLink to="/quizgame">Take the quiz</QuizLink>
      </QuizWrapper>
    </QuizPageContainer>
  );
};

export default QuizPage;
