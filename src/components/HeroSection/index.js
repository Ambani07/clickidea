import React, { useState } from "react";
import Video from "../../videos/video.mp4";

import { Button } from "../ButtonElement";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  ImgWrap,
  Img
} from "./HeroElement";

const HeroSection = ({ img,
  alt }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer id="home">
        {/* <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video.mp4" />
        </HeroBg> */}
        <ImgWrap>
          <Img src={img} alt={alt} />
        </ImgWrap>
        <HeroContent>
          <HeroH1>Get started with your online presence.</HeroH1>
          <HeroP>starting from just R250</HeroP>
          <HeroBtnWrapper>
            <Button
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
