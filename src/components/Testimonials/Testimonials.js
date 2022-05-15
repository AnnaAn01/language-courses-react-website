// import styled from "styled-components";

// export const TestimonialsContainer = styled.div`
//   color: #000;
//   background: ${({ lightBg }) => (lightBg ? "#fff" : "#000")};

//   @media screen and (max-width: 768px) {
//     padding: 100px 0;
//   }
// `;
// export const TestimonialsWrapper = styled.div`
//   display: grid;
//   z-index: 1;
//   height: 860px;
//   width: 100%;
//   max-width: 1100px;
//   margin-right: auto;
//   margin-left: auto;
//   padding: 0 24px;
//   justify-content: center;
//   //   background: green;
// `;
// export const TestimonialsRow = styled.div`
//   display: grid;
//   grid-auto-columns: minmax(auto, 1fr);
//   column-gap: 2rem;
//   align-items: center;
//   grid-template-areas: ${({ imgStart }) =>
//     imgStart ? `'col2 col1'` : `'col1 col2'`};

//   @media screen and (max-width: 768px) {
//     grid-template-areas: ${({ imgStart }) =>
//       imgStart ? `'col1' 'col2'` : `'col1 col2' 'col1 col1' 'col2 col2'`};
//   }
// `;

// export const Column1 = styled.div`
//   margin-bottom: 15px;
//   padding: 0 15px;
//   grid-area: col1;
//   // background: purple;
// `;
// export const Column2 = styled.div`
//   margin-bottom: 15px;
//   max-height: 430px;
//   padding: 0 15px;
//   grid-area: col2;
//   background: blue;
// `;
// export const TextWrapper = styled.div`
//   //   background: yellow;
//   max-width: 540px;
//   padding-top: 0;
//   padding-bottom: 60px;
// `;
// export const TopLine = styled.p`
//   color: #016f71;
//   font-size: 16px;
//   line-height: 16px;
//   font-weight: 700;
//   letter-spacing: 1.4px;
//   text-transform: uppercase;
//   margin-bottom: 16px;
// `;
// export const Heading = styled.h1`
//   margin-bottom: 24px;
//   font-size: 48px;
//   line-height: 1.1;
//   font-weight: 600;
//   color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

//   @media screen and (480px) {
//     font-size: 32px;
//   }
// `;

// export const Subtitle = styled.p`
//   max-width: 440px;
//   margin-bottom: 35px;
//   font-height: 18px;
//   line-height: 24px;
//   color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
// `;

// export const BtnWrap = styled.div`
//   display: flex;
//   jistify-content: flex-start;
// `;

// export const ImgWrap = styled.div`
//   display: block;
//   position: relative;
//   max-width: 200px;
//   // height: 10%;
//   // display: flex;
//   position: absolute;
//   margin-top: 0px;
//   // background: yellow;
//   align-items: flex-start;
//   justify-content: flex-start;
// `;

// export const Img = styled.img`
//   display: flex;
//   position: relative;
//   width: 100%;
//   margin: 0 0 10px 0;
//   padding-right: 0;
// `;

// export const Col2TestimonialWrap = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   justify-cntent: flex-start;
//   align-items: flex-start;
//   // margin-top: -50px;
//   background: red;
// `;

// export const TestimonialCard = styled.div`
//   // padding-bottom: 10px;
//   // border-bottom: 1px solid black;
//   position: relative;
//   top: 35px;
//   flex-direction: column;
//   background: orange;
//   max-width: 540px;
//   height: 100%;
//   margin: 5px 0;
//   padding-top: 0;
//   padding-bottom: 10px;
// `;
// export const TestimonialName = styled.div``;

import styled from "styled-components";

export const TestimonialsContainer = styled.div`
  margin-top: 200px;
  color: #000;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#000")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const TestimonialsWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 600px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  //   background: green;
  margin-bottom: 50px;
`;
export const TestimonialsRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  column-gap: 1.5rem;
  align-items: center;

  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col2' 'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  // background-color: orange;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  // background-color: orange;
`;
export const TextWrapper = styled.div`
  // background: yellow;
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;
export const TopLine = styled.p`
  color: #016f71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div``;

export const Img = styled.img`
  width: 150px;
  margin-bottom: 10px;
`;

export const Col2TestimonialWrap = styled.div`
  max-width: 540px;
  padding-top: 0;
  // padding-bottom: 50px;
`;

export const TestimonialCard = styled.div`
  margin: 0px 0 15px 0;
  // background-color: red;
  // border: 2px solid rgba(1, 111, 113, 0.35);
  border: 2px solid #f1f1f1;
  padding: 5px 7px;
  border-radius: 10px;
  background-color: #f6f6f6;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const TestimonialName = styled.div`
  font-weight: 600;
  padding-bottom: 5px;
  color: green;
`;
