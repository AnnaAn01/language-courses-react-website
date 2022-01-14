import React from "react";
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  TransparentImgCol,
} from "./HeroElements";
// import Image from "../../images/hero-1.jpg";
import Image from "../../images/hero-2.jpg";

const HeroSection = () => {
  return (
    <div>
      <HeroContainer>
        <HeroBg>
          <ImageBg src={Image} alt="studying child" />
          <TransparentImgCol />
        </HeroBg>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
