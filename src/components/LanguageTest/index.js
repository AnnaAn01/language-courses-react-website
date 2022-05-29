import React from "react";

import {
  LangTestContainer,
  LangTestWrapper,
  LangTestRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  BtnWrap,
  ImgWrap,
  Img,
  LangTestButton,
} from "./LanguageTest";
import imgUrl8 from "../../images/svg-test-7.svg";
const LanguageTest = () => {
  return (
    <>
      <LangTestContainer id="language-test">
        <LangTestWrapper>
          <LangTestRow>
            <Column1>
              <TextWrapper>
                <TopLine>language test</TopLine>
                <Heading>
                  Try our online test to find out which course is right for you.
                </Heading>
                <BtnWrap>
                  <LangTestButton
                    to="/langtest"
                    duration={500}
                    spy="true"
                    exact="true"
                    offset={-80}
                  >
                    Take the quiz
                  </LangTestButton>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={imgUrl8} alt="quiz" />
              </ImgWrap>
            </Column2>
          </LangTestRow>
        </LangTestWrapper>
      </LangTestContainer>
    </>
  );
};

export default LanguageTest;
