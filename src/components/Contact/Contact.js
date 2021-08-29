import React, { useState } from 'react'
import axios from 'axios'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import {
    ContactContainer,
    ContactWrapper,
    ContactRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    FormWrap,
    FormContent,
    Form,
    FormLabel,
    PhoneNumberFormInputError,
    PhoneNumberFormInput,
    FormInput,
    FormButton,
    SocialIcons,
    SocialIconLink,
    ContactMessage
  } from "./ContactElements";

const Contact = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
  }) => {

    const API_PATH = '/api/contact.php';

    //Form states
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [phoneErrorMessage, setPhoneErrorMessage]= useState('')
    const [formStatus, setFormStatus] = useState(false)

    const onContactHandler = (e) => {
      e.preventDefault();

      var numbers = /^[+27]?[0-9]+$/;

      if(phone.includes("+27")){
          let cleanNumber = phone.replace("+27", "0")
          setPhone(cleanNumber)
          setPhoneErrorMessage('')
      }
      
      if(phone.length !== 10 || !phone.match(numbers)) {
        setPhoneErrorMessage('Incorrect number format')
      }else{
        setPhoneErrorMessage('')
      }

      if(phoneErrorMessage === ''){

        axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/json' },
          data: {
            name: name,
            phone: phone,
            email: email,
            message: message
          }
        })
        .then(result => {
          setFormStatus(result.data.sent)

          setTimeout(() => {
            setFormStatus(false)
          }, 5000);
        })
        .catch(error => console.log(error.message));
      }
    }
    
    return (
        <ContactContainer lightBg={lightBg} id={id}>
        <ContactWrapper>
          <ContactRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>Let's Get In Touch</TopLine>
                <Subtitle darkText={darkText}>Cell: 067 134 8606 <br />Email: ambani.matsedu@gmail.com</Subtitle>
                <TopLine>Hours</TopLine>
                <Subtitle darkText={darkText}>Mon - Fri: 09H00 AM - 18H00 PM <br />Sat: 09H00 AM - 14H00 PM</Subtitle>
                <TopLine>Follow Us</TopLine>
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
              </TextWrapper>
            </Column1>
            <Column2>
            <FormWrap>
                <FormContent>
                    <Form onSubmit={onContactHandler}>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <ContactMessage messageSent={formStatus}>
                          Thank you for sending us a message. We will be getting in touch soon!.
                        </ContactMessage>
                        <FormLabel htmlFor="for">
                          Name
                        </FormLabel>
                        <FormInput 
                          type="name"
                          value={name}
                          name="name"
                          onChange={(e) => setName(e.target.value)} 
                          required
                        />
                        <FormLabel htmlFor="for">
                          Phone Number
                        </FormLabel>
                        <PhoneNumberFormInput 
                          type="text"
                          value={phone}
                          name="phone"
                          onChange={(e) => setPhone(e.target.value)} 
                          required
                        />
                        {phoneErrorMessage && (
                          <PhoneNumberFormInputError>
                            {phoneErrorMessage}
                          </PhoneNumberFormInputError>
                        )}
                        <FormLabel htmlFor="for">
                          Email
                        </FormLabel>
                        <FormInput 
                          type="email"
                          value={email}
                          name="email"
                          onChange={(e) => setEmail(e.target.value)} 
                          required
                        />
                        <FormLabel htmlFor="for">Message</FormLabel>
                        <FormInput 
                          type="text"
                          value={message}
                          name="message"
                          onChange={(e) => setMessage(e.target.value)} 
                          required
                        />
                        <FormButton type="submit" >Send Message</FormButton>
                    </Form>
                </FormContent>
                </FormWrap>
            </Column2>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    )
}

export default Contact
