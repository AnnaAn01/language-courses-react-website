import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const InfoContainer = styled.div`
  color: #000;
  /* background: #fff; */
  background-color: rgba(239, 220, 249, 0.2);

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 750px;
  /* height: 860px; */

  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 160px 24px 0 24px;
  justify-content: center;
  /* background: green; */

  @media screen and (max-width: 1024px) and (min-width: 1001px) {
    height: 650px;
    padding: 100px 24px 0 24px;
  }

  @media screen and (max-width: 1001px) {
    height: 750px;
    padding: 120px 24px 0 24px;
  }

  @media screen and (max-width: 568px) {
    height: 660px;
    margin-top: -40px;
  }

  @media screen and (max-width: 451px) {
    height: 600px;
  }
`;
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  column-gap: 2rem;
  align-items: center;
  grid-template-areas: "col1 col2";
  /* background-color: red; */

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col2" "col1 col1" "col2 col2";
  }

  @media screen and (max-width: 568px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width: 568px) {
    width: 60%;
  }
`;
export const TextWrapper = styled.div`
  //   background: yellow;
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
  color: #010606;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  line-height: 24px;
  color: #010606;

  @media screen and (max-width: 1001px) {
    font-size: 1.7rem;
    line-height: 1.25;
  }

  @media screen and (max-width: 281px) and (max-height: 654px) {
    font-size: 1.5rem;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: -100px 0 10px 0;
  padding-right: 0;

  @media screen and (max-width: 1001px) {
    width: 100%;
  }
`;

export const InfoButton = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #62c2a2;
  }

  @media screen and (max-width: 1001px) {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 281px) and (max-height: 654px) {
    font-size: 1.2rem;
  }
`;
