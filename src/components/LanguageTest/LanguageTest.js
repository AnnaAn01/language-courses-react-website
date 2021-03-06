import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const LangTestContainer = styled.div`
  /* margin-top: 200px; */
  color: #000;
  /* background-color: rgba(239, 220, 249, 0.2); */
  background: #fff;

  /* @media screen and (max-width: 1024px) and (min-width: 1001px) {
    height: 500px;
  } */

  @media screen and (max-width: 1024px) and (min-width: 1001px) {
    /* padding: 120px 24px;
    margin-top: -40px;
    margin-bottom: -20px;
    height: 550px; */
  }

  @media screen and (max-width: 768px) {
    padding: 20px 0 100px 0;
  }
`;
export const LangTestWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 650px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 120px 24px;
  justify-content: center;
  /* margin-bottom: 50px; */

  @media screen and (max-width: 1024px) and (min-width: 1001px) {
    padding-top: 50px;
    height: 550px;
    padding-bottom: 10px;
  }

  @media screen and (max-width: 568px) {
    height: 670px;
    margin-top: -50px;
  }

  @media screen and (max-width: 451px) {
    height: 550px;
  }
`;
export const LangTestRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  column-gap: 2rem;
  align-items: center;

  grid-template-areas: "col1 col2";

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
  font-size: 45px;
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

  line-height: 30px;
  color: #010606;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 3rem;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const Col2LangTestWrap = styled.div`
  max-width: 540px;
  padding-top: 0;
`;

export const LangTestCard = styled.div`
  margin: 0px 0 15px 0;
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
export const LangTestName = styled.div`
  font-weight: 600;
  padding-bottom: 5px;
  color: green;
`;

export const LangTestButton = styled(LinkR)`
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
