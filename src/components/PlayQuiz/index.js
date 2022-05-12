import React, { useState } from "react";
import questions from "../QuizPage/Data";
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
  ChoiceContainerUl,
  ChoiceContainerLi,
  ChoicePrefix,
  ChoiceText,
  FinalResults,
  FinalResultsH2,
} from "./PlayQuizElements";

const theme = {
  colors: {
    correct: "green",
    incorrect: "red",
  },
};

const QuizPage = () => {
  // Properties
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [color, setColor] = useState();

  // Helper functions
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setColor("green");
    } else {
      setColor("red");
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  };

  return (
    <PlayQuizContainer>
      <UniversalStyle />
      {showFinalResults ? (
        <FinalResults>
          <FinalResultsH2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </FinalResultsH2>
        </FinalResults>
      ) : (
        <PlayQuizWrapper>
          <QuizArea>
            <QuizItem>
              <ProgressText>
                Question {currentQuestion + 1} out of {questions.length}
              </ProgressText>
              <ProgressBar>
                <ProgressBarFull></ProgressBarFull>
              </ProgressBar>
            </QuizItem>
            <QuizItem>
              <QuizItemPrefix>Current Score:</QuizItemPrefix>
              <QuizMainTextScore>{score}</QuizMainTextScore>
            </QuizItem>
          </QuizArea>

          <QuizQuestion>{questions[currentQuestion].text}</QuizQuestion>

          <ChoiceContainerUl>
            {questions[currentQuestion].options.map((option) => {
              return (
                <ChoiceContainerLi
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                  color={color}
                >
                  {option.text}
                </ChoiceContainerLi>
              );
            })}
            {/*

            <ChoiceContainerLi>
              <ChoicePrefix>A</ChoicePrefix>
              <ChoiceText data-number="1">Choice</ChoiceText>
            </ChoiceContainerLi>
            <ChoiceContainerLi>
              <ChoicePrefix>B</ChoicePrefix>
              <ChoiceText data-number="2">Choice 2</ChoiceText>
            </ChoiceContainerLi>
            <ChoiceContainerLi>
              <ChoicePrefix>C</ChoicePrefix>
              <ChoiceText data-number="3">Choice 3</ChoiceText>
            </ChoiceContainerLi>
            <ChoiceContainerLi>
              <ChoicePrefix>D</ChoicePrefix>
              <ChoiceText data-number="4">Choice 4</ChoiceText>
            </ChoiceContainerLi>
            */}
          </ChoiceContainerUl>
        </PlayQuizWrapper>
      )}
    </PlayQuizContainer>
  );
};

export default QuizPage;
