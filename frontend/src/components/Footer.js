import React from 'react';
import styled from 'styled-components';

const BottomBarWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1.5rem 0;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  margin: 0.5rem 0;
`;

const FooterLinks = styled.div`
  margin-top: 0.5rem;
`;

const FooterLink = styled.a`
  color: #ff6b6b;
  margin: 0 0.75rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <BottomBarWrapper>
      <FooterText>&copy; {new Date().getFullYear()} Fire Safety App. All rights reserved.</FooterText>
      <FooterText>Developed by TEAM 1 @ HachathonUSM</FooterText>
      <FooterLinks>
        <FooterLink href="/about">About Us</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
        <FooterLink href="/terms">Terms of Service</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
      </FooterLinks>
    </BottomBarWrapper>
  );
}

export default Footer;
