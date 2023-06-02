import React from 'react';

import {
    FooterContainer,
    Title,
    Text,
    ContactItem,
    ContactSection,
    ContactLink 
    
   
  } from './Footer.styled';
  


  const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const phoneNumber = '+380671190560';
    
  
    return (
      <FooterContainer>
        <Title> Movie Search Site Navigator®</Title>
        <Text>© {currentYear} Navigator. All rights reserved.</Text>
        <ContactSection>
          <ContactItem>
            <ContactLink  to={`tel:${phoneNumber}`}>{phoneNumber} Viber</ContactLink> 
          </ContactItem>
          <ContactItem>
          <ContactLink to="mailto:navigators.ua@gmail.com">Email: navigators.ua@gmail.com</ContactLink>
          </ContactItem>
        </ContactSection>
      </FooterContainer>
    );
  };
  
  export default Footer;