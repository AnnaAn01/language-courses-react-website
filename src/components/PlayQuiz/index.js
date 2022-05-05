import React from "react";
import {
  UniversalStyle,
  PlayQuizContainer,
  PlayQuizWrapper,
  QuizArea,
  QuizItem,
  ProgressText,
  ProgressBar,
  ProgressBarFull,
  QuizItemPrefix,
  QuizMainTextScore,
  QuizQuestion,
  ChoiceContainer,
  ChoicePrefix,
  ChoiceText,
} from "./PlayQuizElements";

const QuizPage = () => {
  return (
    <PlayQuizContainer>
      <UniversalStyle />
      <PlayQuizWrapper>
        <QuizArea>
          <QuizItem>
            <ProgressText>Question</ProgressText>
            <ProgressBar>
              <ProgressBarFull></ProgressBarFull>
            </ProgressBar>
          </QuizItem>
          <QuizItem>
            <QuizItemPrefix>Score</QuizItemPrefix>
            <QuizMainTextScore>0</QuizMainTextScore>
          </QuizItem>
        </QuizArea>
        <QuizQuestion>What is the answer to this question</QuizQuestion>
        <ChoiceContainer>
          <ChoicePrefix>A</ChoicePrefix>
          <ChoiceText data-number="1">Choice</ChoiceText>
        </ChoiceContainer>
        <ChoiceContainer>
          <ChoicePrefix>B</ChoicePrefix>
          <ChoiceText data-number="2">Choice 2</ChoiceText>
        </ChoiceContainer>
        <ChoiceContainer>
          <ChoicePrefix>C</ChoicePrefix>
          <ChoiceText data-number="3">Choice 3</ChoiceText>
        </ChoiceContainer>
        <ChoiceContainer>
          <ChoicePrefix>D</ChoicePrefix>
          <ChoiceText data-number="4">Choice 4</ChoiceText>
        </ChoiceContainer>
      </PlayQuizWrapper>
    </PlayQuizContainer>
  );
};

export default QuizPage;
