import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

// export const HeroContainer = styled.div`
//   // background: rgba(255, 140, 0, 0.5);
//   background: #fdfdfd;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0 30px;
//   height: 800px;
//   z-index: 8;
// `;

export const HeroContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.img`
  position: relative;
  background-size: cover;
  width: 100%;
  margin-top: 50px;
`;
export const TransparentImgCol = styled.div`
  position: absolute;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 0 30px;
  height: 800px;
  // background-color: rgba(255, 255, 255, 0.8);
  // background-color: rgba(77, 93, 83, 0.95);
  height: 100vh;
  width: 100vw;
  z-index: 9;
`;

export const HeroContent = styled.div`
  z-index: 11;
  max-width: 1100px;
  position: absolute;
  // background-color: rgba(255, 255, 255, 0.9);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #2e422e;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: black;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 28x;
  }

  @media screen and (max-width: 480px) {
    font-size: 18x;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
