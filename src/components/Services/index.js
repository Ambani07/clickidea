import React from "react";

import Icon1 from "../../images/webdesign.svg";
import Icon2 from "../../images/onlineshop.svg";
import Icon3 from "../../images/hosting.svg";

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
          <ServicesH2>eCommerce</ServicesH2>
          <ServicesP>
            We help business setup online shops with secure payment gateways.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}></ServicesIcon>
          <ServicesH2>Hosting</ServicesH2>
          <ServicesP>
            Affordable hosting solutions for emails and web applications.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
