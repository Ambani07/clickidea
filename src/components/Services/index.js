import React from "react";

import Icon1 from "../../images/webdesign.svg";
import Icon2 from "../../images/market-1.svg";
import Icon3 from "../../images/world.svg";

// GrPersonalComputer
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}></ServicesIcon>
          <ServicesH2>Web Design</ServicesH2>
          <ServicesP>
            We design website and ecommerce solutions customizable for your business needs.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}></ServicesIcon>
          <ServicesH2>Social Media Marketing</ServicesH2>
          <ServicesP>
            We help your business get setup on social media and manage the ad campaigns for you.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}></ServicesIcon>
          <ServicesH2>SEO</ServicesH2>
          <ServicesP>
            Unlock the ultimate online presence and many more with the lates technology solutions.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
