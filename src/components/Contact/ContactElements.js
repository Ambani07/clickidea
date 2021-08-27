import styled from "styled-components";

const primary_color = '#283346';
const secondary_color = '#f9f9f9';

export const ContactContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? secondary_color : primary_color)};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ContactRow = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 180px;
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    padding: 0 30px;
    margin-bottom: 15px;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #3871ff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  // line-height: 1.1%;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : primary_color)};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? primary_color : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const FormWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
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

export const ContactMessage = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
  padding-left: 15px;
  border-radius: 5px;
  background-color: green;
  display: ${({ messageSent }) => (messageSent ? 'visible' : 'none')};
`

export const Form = styled.form`
  background: #283346;
  max-width: 800px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 400px) {
    padding: 10px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const PhoneNumberFormInputError = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  color: red;
`;

export const PhoneNumberFormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 8px;
  border: none;
  border-radius: 4px;
  width: 500px;

  @media screen and (max-width: 480px) {
    width: 218px;
  }
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  width: 500px;

  @media screen and (max-width: 480px) {
    width: 218px;
  }
`;

export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  padding-left: 10px;
`;

