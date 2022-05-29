import React from "react";
// import { Button } from "../ButtonElement";
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
import imgUrl7 from "../../images/stars.png";

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
      <TestimonialsContainer id="testimonials">
        <TestimonialsWrapper>
          <TestimonialsRow>
            <Column1>
              <TextWrapper>
                <TopLine>Testimonials</TopLine>
                <Heading>Here's what people wrote about our courses.</Heading>
                <Subtitle>We offer high quality affordable courses.</Subtitle>
                <BtnWrap>
                  <TestimonialsButton
                    to="/signin"
                    duration={500}
                    spy="true"
                    exact="true"
                    offset={-80}
                  >
                    Get started
                  </TestimonialsButton>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <Col2TestimonialWrap>
                <ImgWrap>
                  <Img src={imgUrl7} alt="stars" />
                </ImgWrap>
                <TestimonialCard>
                  <TestimonialName>Karine</TestimonialName>
                  Շնորհակալ եմ Ձեզ վերջապես ճիշտ ուղեցույց ընթերցելու համար։ Ես
                  ինքս հաճույքով սովորում եմ Ձեր իսկ աջակցությամբ։
                </TestimonialCard>

                <TestimonialCard>
                  <TestimonialName>Zina</TestimonialName>
                  Անսահման շնորհակալ եմ, չեք պատկերացնի ինչպես եմ սովորում․․․
                  առանց մի բան իմանալու, ձեզ լսելով․․․ անսահման շնորհակալ եմ․․․
                  Աստված օրհնի
                </TestimonialCard>

                <TestimonialCard>
                  <TestimonialName>Andranik</TestimonialName>
                  Շնորհակալություն, շատ լավ եք ներկայացնում։
                </TestimonialCard>

                <TestimonialCard>
                  <TestimonialName>Hovik</TestimonialName>
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
