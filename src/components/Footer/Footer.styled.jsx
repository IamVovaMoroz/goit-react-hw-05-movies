
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`

  bottom: 0;
  left: 0;

  background-color: rgba(43, 178, 180, 0.421);
  margin-top: 50px;
  padding: 20px;
  text-align: center;
 
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 16px;
`;

export const ContactSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const ContactItem = styled.div`
  margin: 0 10px;
`;

export const ContactLink = styled(Link)`
  color: rgba(0, 121, 191, 0.8);
  text-decoration: none;
`;