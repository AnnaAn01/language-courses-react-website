import React from "react";
import {
  UniversalStyle,
  QuizPageContainer,
  QuizWrapper,
  QuizH1,
  QuizLink,
  QuizContentInfo,
} from "./QuizPageElements";

const QuizPage = () => {
  return (
    <QuizPageContainer>
      <UniversalStyle />
      <QuizWrapper>
        <QuizH1>
          Try not to choose answers randomly. We want to make sure your results
          are accurate.
        </QuizH1>
        <QuizContentInfo>
          Quiz content is taken from grade 3, 4 and 5 textbooks.
        </QuizContentInfo>
        <QuizLink to="/quizgame">Take the quiz</QuizLink>
      </QuizWrapper>
    </QuizPageContainer>
  );
};

export default QuizPage;
