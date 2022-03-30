// import React from "react";
// import { Button } from "../ButtonElement";
// import {
//   TestimonialsContainer,
//   TestimonialsWrapper,
//   TestimonialsRow,
//   Column1,
//   Column2,
//   TextWrapper,
//   TopLine,
//   Heading,
//   Subtitle,
//   BtnWrap,
//   ImgWrap,
//   Img,
//   Col2TestimonialWrap,
//   TestimonialCard,
//   TestimonialName,
// } from "./Testimonials";

// const TestimonialsSection = ({
//   lightBg,
//   id,
//   imgStart,
//   topLine,
//   lightText,
//   headline,
//   darkText,
//   description,
//   buttonLabel,
//   img,
//   alt,
//   primary,
//   dark,
//   dark2,
// }) => {
//   return (
//     <>
//       <TestimonialsContainer lightBg={lightBg} id={id}>
//         <TestimonialsWrapper>
//           <TestimonialsRow imgStart={imgStart}>
//             <Column1>
//               <TextWrapper>
//                 <TopLine>{topLine}</TopLine>
//                 <Heading lightText={lightText}>{headline}</Heading>
//                 <Subtitle darkText={darkText}>{description}</Subtitle>
//                 <BtnWrap>
//                   <Button
//                     to="home"
//                     duration={500}
//                     spy={true}
//                     exact="true"
//                     offset={-80}
//                     primary={primary ? 1 : 0}
//                     dark={dark ? 1 : 0}
//                     dark2={dark2 ? 1 : 0}
//                   >
//                     {buttonLabel}
//                   </Button>
//                 </BtnWrap>
//               </TextWrapper>
//             </Column1>
//             <Column2>
//               <ImgWrap>
//                 <Img src={img} alt={alt} />
//               </ImgWrap>
//               <Col2TestimonialWrap>
//                 <TestimonialCard>
//                   <TestimonialName>Karine</TestimonialName>
//                   Thank you very much. Lorem ipsum dolor sit, amet consectetur
//                   adipisicing elit. Deserunt quae modi amet, consectetur
//                   obcaecati repellat
//                 </TestimonialCard>
//                 <TestimonialCard>
//                   <TestimonialName>Zina</TestimonialName>
//                   Thank you very much. Lorem ipsum dolor sit, amet consectetur
//                   adipisicing elit.
//                 </TestimonialCard>
//                 <TestimonialCard>
//                   <TestimonialName>Zina</TestimonialName>
//                   Thank you very much. Lorem ipsum dolor sit, amet consectetur
//                   adipisicing elit.
//                 </TestimonialCard>
//                 <TestimonialCard>
//                   <TestimonialName>Zina</TestimonialName>
//                   Thank you very much. Lorem ipsum dolor sit, amet consectetur
//                   adipisicing elit.
//                 </TestimonialCard>
//               </Col2TestimonialWrap>
//             </Column2>
//           </TestimonialsRow>
//         </TestimonialsWrapper>
//       </TestimonialsContainer>
//     </>
//   );
// };

// export default TestimonialsSection;

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
                <TestimonialName lightText={lightText}>Zina</TestimonialName>
                <TestimonialCard darkText={darkText}>
                  Անսահման շնորհակալ եմ, չեք պատկերացնի ինչպես եմ սովորում․․․
                  առանց մի բան իմանալու, ձեզ լսելով․․․ անսահման շնորհակալ եմ․․․
                  Աստված օրհնի
                </TestimonialCard>
                <TestimonialName lightText={lightText}>
                  Andranik
                </TestimonialName>
                <TestimonialCard darkText={darkText}>
                  Շնորհակալություն, շատ լավ եք ներկայացնում։
                </TestimonialCard>
                <TestimonialName lightText={lightText}>Hovik</TestimonialName>
                <TestimonialCard darkText={darkText}>
                  Բարև Ձեզ, բառեր չոնեմ աարտահայտելու, թե որքան գիտելիք տվեցիք
                  իմ դղային։
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
