import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  text-align: center;
  color: #333;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ff6b6b;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
`;

function AboutUs() {
  return (
    <AboutWrapper>
      <AboutTitle>About Us</AboutTitle>
      <AboutText>
        Our mission is to use the latest technology to help communities stay safe
        by monitoring fire-prone areas. We provide real-time information based on
        satellite data to inform the public of potential fire risks. By combining
        geolocation and predictive analysis, we aim to support early detection and
        proactive measures for fire safety. Together, we can make a difference in
        protecting our environment and lives.
      </AboutText>
    </AboutWrapper>
  );
}

export default AboutUs;
