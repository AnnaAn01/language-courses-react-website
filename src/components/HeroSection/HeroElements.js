import styled from "styled-components";

export const HeroContainer = styled.div`
  background: rgba(255, 140, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 300vh;
  z-index: 999;
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
export const ColorTr = styled.img`
  background-image: rgba(255, 140, 0, 1);
  z-index: 9999;
`;
