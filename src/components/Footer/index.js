import React from "react";

import { animateScroll as scroll } from "react-scroll";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialIcon,
  FooterAddressLink
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              {/* <FooterLinkItems>
                <FooterLinkTitle>Menu</FooterLinkTitle>
                <FooterLinks 
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                    About
                </FooterLinks>
                <FooterLinks 
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                    services
                </FooterLinks>
                <FooterLinks 
                  to="pricing"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                    Prices
                </FooterLinks>
                <FooterLinks 
                  to="contactus"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                    Contact Us
                </FooterLinks>
              </FooterLinkItems> */}
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Address</FooterLinkTitle>
                <FooterAddressLink to="signin">4198 Costa Rico Street</FooterAddressLink>
                <FooterAddressLink to="signin">Cosmo City</FooterAddressLink>
                <FooterAddressLink to="signin">Randburg</FooterAddressLink>
                <FooterAddressLink to="signin">2188</FooterAddressLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Contact us</FooterLinkTitle>
                <FooterLink to="signin">Cell: 067 134 8606</FooterLink>
                <FooterLink to="signin">Email: ambani.matsedu@gmail.com</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo onClick={toggleHome}>
                <SocialIcon />
                Clickideas
              </SocialLogo>
              <WebsiteRights>
                Clickideas &copy; 2021
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href='/' target="_blank" arial-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='/' target="_blank" arial-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href={'https://www.youtube.com/channel/UCDPB_wDwRUsiWeuBNzEbKmg'}
                  target="_blank"
                  arial-label="Youtube" rel="noopener noreferrer">
                  <FaWhatsapp />
                </SocialIconLink>
                <SocialIconLink href='/' target="_blank" arial-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href='/' target="_blank" arial-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
