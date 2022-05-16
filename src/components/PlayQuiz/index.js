import React, { useState } from "react";
import questions from "../QuizPage/Data";
import FinalResultImg1 from "../../images/result-level-1.svg";
import FinalResultImg2 from "../../images/result-level-2.svg";
import FinalResultImg3 from "../../images/result-level-3.svg";
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
  FinalResultsImg,
} from "./PlayQuizElements";

const resultCount = {
  answers: {
    oneToFive: "You can take the grade 3 course for beginners.",
    sixToTen: "Six to Ten, grade 4",
    elevenToFifteen: "Eleven to fifteen, grade 5",
  },
};

const QuizPage = () => {
  // Properties
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [clicked, setClicked] = useState(false);

  // Helper functions
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setClicked(true);

    if (currentQuestion + 1 < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setClicked(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setFinalResults(true);
      }, 1000);
    }
  };

  return (
    <PlayQuizContainer>
      <UniversalStyle />
      {showFinalResults ? (
        <FinalResults>
          <FinalResultsH2>
            {score} out of {questions.length} correct - (
            {Math.floor((score / questions.length) * 100)}%)
            <div>
              {score <= 5
                ? resultCount.answers.oneToFive
                : score <= 10
                ? resultCount.answers.sixToTen
                : resultCount.answers.elevenToFifteen}
            </div>
          </FinalResultsH2>
          <FinalResultsImg
            src={
              score <= 5
                ? FinalResultImg1
                : score <= 10
                ? FinalResultImg2
                : FinalResultImg3
            }
            alt="quiz"
          ></FinalResultsImg>
        </FinalResults>
      ) : (
        <PlayQuizWrapper>
          <QuizArea>
            <QuizItem>
              <ProgressText>
                Question {currentQuestion + 1} out of {questions.length}
              </ProgressText>
              {/*<ProgressBar>
                <ProgressBarFull></ProgressBarFull>
      </ProgressBar>*/}
            </QuizItem>
            <QuizItem>
              <QuizItemPrefix>Current Score:</QuizItemPrefix>
              <QuizMainTextScore>{score}</QuizMainTextScore>
            </QuizItem>
          </QuizArea>

          <QuizQuestion>{questions[currentQuestion].text}</QuizQuestion>

          <ChoiceContainerUl>
            {questions[currentQuestion].options.map((option, index) => {
              return (
                <ChoiceContainerLi
                  className={`
                    ${
                      clicked && option.isCorrect
                        ? "correct"
                        : clicked && !option.isCorrect
                        ? "incorrect"
                        : "default"
                    }
                  `}
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </ChoiceContainerLi>
              );
            })}
          </ChoiceContainerUl>
        </PlayQuizWrapper>
      )}
    </PlayQuizContainer>
  );
};

export default QuizPage;
