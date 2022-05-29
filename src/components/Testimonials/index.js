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
  TestimonialsButton,
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
                  <TestimonialsButton
                    to="/signin"
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </TestimonialsButton>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <Col2TestimonialWrap>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
                <TestimonialCard darkText={darkText}>
                  <TestimonialName lightText={lightText}>
                    Karine
                  </TestimonialName>
                  Շնորհակալ եմ Ձեզ վերջապես ճիշտ ուղեցույց ընթերցելու համար։ Ես
                  ինքս հաճույքով սովորում եմ Ձեր իսկ աջակցությամբ։
                </TestimonialCard>

                <TestimonialCard darkText={darkText}>
                  <TestimonialName lightText={lightText}>Zina</TestimonialName>
                  Անսահման շնորհակալ եմ, չեք պատկերացնի ինչպես եմ սովորում․․․
                  առանց մի բան իմանալու, ձեզ լսելով․․․ անսահման շնորհակալ եմ․․․
                  Աստված օրհնի
                </TestimonialCard>

                <TestimonialCard darkText={darkText}>
                  <TestimonialName lightText={lightText}>
                    Andranik
                  </TestimonialName>
                  Շնորհակալություն, շատ լավ եք ներկայացնում։
                </TestimonialCard>

                <TestimonialCard darkText={darkText}>
                  <TestimonialName lightText={lightText}>Hovik</TestimonialName>
                  Բարև Ձեզ, բառեր չունեմ աարտահայտելու, թե որքան գիտելիք տվեցիք
                  իմ տղային։
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
