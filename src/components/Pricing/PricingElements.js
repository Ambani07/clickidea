import styled from "styled-components";

export const PricingSection = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 100px 0 160px;
    background: #f9f9f9;
`;

export const PricingWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`

export const PricingHeader = styled.h1 `
    margin-bottom: 24px;
    font-size: 48px;
    font-weight: 600;
    color: #283346;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 20px;
  color: #283346;
  text-align: center;
`;

export const PricingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`

export const PricingCard = styled.div`
    background: #283346;
    box-shadow: 0 6px 20px rgba(40, 51, 70, 1);
    width: 280px;
    height: 500px;
    text-decoration: none;
    border-radius: 4px;

    &:nth-child(2) {
        margin: 24px;
    }

    &:hover {
        transform: scale(1.06);
        transition: all 0.3s ease-out;
        color: #1c2237;
    }

    @media screen and (max-width: 960px) {
        width: 90%;

        &:hover {
            transform: none;
        }
    }

`

export const PricingCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 50px;
    padding: 24px;
    align-items: center;
    color: #fff;
`

export const PricingCardIcon = styled.p`
    margin: 24px 0;
`

export const PricingCardPlan = styled.h3`
    margin-bottom: 5px;
    font-size: 24px;
`

export const PricingCardCost = styled.h4`
    font-size: 40px;
`

export const PricingCardLength = styled.p`
    font-size: 14px;
    margin-bottom: 24px;
`

export const PricingCardFeatures = styled.ul`
    margin: 16px 0 32px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #a9b3c1;
`

export const PricingCardFeature = styled.li`
    margin-bottom: 10px;
`

export const Button = styled.button`
    border-radius: 4px;
    background: #0467fb;
    white-space: nowrap;
    padding:  12px 64px;
    color: #fff;
    font-size: 14px;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({ primary }) => (primary ? '#0467fb' : '#4b59f7')};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`


export const Form = styled.form`
    margin: 0;
    padding: 0;
`;

export const FormInput = styled.input ` 
    margin: 0;
`