import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100%;
  background: linear-gradient(
    108deg,
    rgba(40, 51, 70, 1) 0%,
    rgba(10, 201, 1222, 1) 100%
  );
`;

export const ChoosePlan = styled.div  `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 16px;
    cursor: pointer;
`

export const ChoosePlanOptions = styled.button `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #283346;
    color: #fff;
    border: 1px solid;
    /* border-color: ${({ plan }) => (plan ? "#01BF71" : '#f7f8fa')}; */
    padding: 16px 16px;
    border-radius: 5px;
`

export const FormWrap = styled.div`
  height: 100%;
  padding-top: 8rem;
  padding-bottom: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #283346;
  max-width: 600px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const TopLine = styled.p`
  color: #3871ff;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 32px;
  text-align: center;
`;

export const FormH1 = styled.h1`
  font-size: 48px;
  margin-bottom: 40px;
  color: #fff;
  line-height: 1.1%;
  font-weight: 600;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormRadio = styled.span`
    display: inline-block;
    position: relative;
    border: 1px solid #777777;
    width: 14px;
    height: 14px;
    left: 0;
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
    background: ${({ plan }) => (plan ? "#01BF71" : '#283346')};
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin-top: 2rem;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const PhoneNumberFormInputError = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  color: red;
`;
