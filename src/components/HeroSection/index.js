import React from "react";
import { HeroContainer, HeroBg, ImageBg } from "./HeroElements";
import Image from "../../images/hero-1.jpg";

const HeroSection = () => {
  return (
    <div>
      <HeroContainer>
        <HeroBg>
          <ImageBg src={Image} alt="studying child" />
        </HeroBg>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
