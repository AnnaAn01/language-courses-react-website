import React from "react";
import { Button } from "../ButtonElement";
import {
  TestimonialsContainer,
  TestimonialsWrapper,
  TestimonialsRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  Col2TestimonialWrap,
  TestimonialCard,
  TestimonialName,
} from "./Testimonials";

const TestimonialsSection = ({
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
      <TestimonialsContainer lightBg={lightBg} id={id}>
        <TestimonialsWrapper>
          <TestimonialsRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
              <Col2TestimonialWrap>
                <TestimonialCard>
                  <TestimonialName>Karine</TestimonialName>
                  Thank you very much. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Deserunt quae modi amet, consectetur
                  obcaecati repellat aperiam voluptate, unde nihil non cum
                  reprehenderit vero adipisci iure, suscipit possimus cumque
                  autem voluptatem?
                </TestimonialCard>
              </Col2TestimonialWrap>
            </Column2>
          </TestimonialsRow>
        </TestimonialsWrapper>
      </TestimonialsContainer>
    </>
  );
};

export default TestimonialsSection;
