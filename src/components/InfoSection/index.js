import React from "react";
import imgUrl6 from "../../images/svg-6.svg";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  InfoButton,
} from "./InfoElements";

const InfoSection = () => {
  return (
    <>
      <InfoContainer id="about">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Language Courses</TopLine>
                <Heading>English language courses for beginners</Heading>
                <Subtitle>
                  Get access to our exclusive courses and learn English grammar
                  and vocabulary without struggling.
                </Subtitle>
                <BtnWrap>
                  <InfoButton
                    to="/signin"
                    duration={500}
                    spy="true"
                    exact="true"
                    offset={-80}
                  >
                    Get started
                  </InfoButton>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={imgUrl6} alt="info image" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
