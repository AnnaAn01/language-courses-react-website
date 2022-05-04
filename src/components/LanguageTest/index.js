import React from "react";
// import { Button } from "../ButtonElement";

import {
  LangTestContainer,
  LangTestWrapper,
  LangTestRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  LangTestButton,
} from "./LanguageTest";

const LanguageTest = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <LangTestContainer lightBg={lightBg} id={id}>
        <LangTestWrapper>
          <LangTestRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}></Subtitle>
                <BtnWrap>
                  <LangTestButton
                    to="/langtest"
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </LangTestButton>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </LangTestRow>
        </LangTestWrapper>
      </LangTestContainer>
    </>
  );
};

export default LanguageTest;
