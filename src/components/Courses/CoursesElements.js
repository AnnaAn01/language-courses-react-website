import styled from "styled-components";

export const CoursesContainer = styled.div`
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  background: #fff;
  /* background-color: rgba(239, 220, 249, 0.2); */

  @media screen and (max-width: 1024px) and (min-width: 1001px) {
    height: 650px;
  }

  @media screen and (max-width: 1001px) {
    height: auto;
    /* height: 650px; */
    padding-top: 150px;
    padding-bottom: 100px;
  }

  @media screen and (max-width: 768px) {
    height: 1200px;
  }

  @media screen and (max-width: 568px) {
    height: 1350px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }

  @media screen and (max-width: 281px) and (max-height: 654px) {
    height: 1200px;
  }
`;
export const CoursesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 30px;
  padding: 0 50px;
  /* background-color: red; */

  @media screen and (max-width: 1024px) and (min-width: 1001px) {
  }

  @media screen and (max-width: 1001px) {
    /* grid-template-columns: 1fr 1fr; */
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const CoursesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) and (min-width: 1001px) {
  }

  @media screen and (max-width: 1001px) {
    /* grid-template-columns: 1fr 1fr; */
    grid-template-columns: 1fr;
    width: 65vw;
  }

  @media screen and (max-width: 568px) {
    width: 75vw;
  }

  /* @media screen and (max-width: 451px) {
    width: 75vw;
  } */

  /* @media screen and (max-width: 568px) {
    background: red;                                                                                                                                                                                                            
  } */
`;

export const CoursesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;

  @media screen and (max-width: 1001px) {
    height: auto;
    width: 170px;
  }

  @media screen and (max-width: 568px) {
    height: 15vh;
  }
`;

export const CoursesH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 62px;
  /* background-color: red; */
  margin-top: -50px;

  @media screen and (max-width: 1024px) and (min-width: 1001px) {
    margin-bottom: 50px;
    margin-top: -150px;
  }

  @media screen and (max-width: 451px) {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 281px) and (max-height: 654px) {
    font-size: 2rem;
  }
`;

export const CoursesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;

  @media screen and (max-width: 1001px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 568px) {
    text-align: center;
    padding-bottom: 0.5rem;
  }

  @media screen and (max-width: 451px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 281px) and (max-height: 654px) {
    font-size: 1.3rem;
  }
`;

export const CoursesP = styled.p`
  font-size: 1rem;
  text-align: center;

  @media screen and (max-width: 1001px) {
    font-size: 1.5rem;
    padding-bottom: 10px;
  }

  @media screen and (max-width: 281px) and (max-height: 654px) {
    font-size: 1.3rem;
  }
`;
