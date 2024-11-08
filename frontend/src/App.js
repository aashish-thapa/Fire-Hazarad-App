import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import FireMap from './components/Firemap';
import GlobalStyle from './GlobalStyles';
import AboutUs from './components/Aboutus';
import Footer from './components/Footer';
const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled.section`
  margin: 2rem 0;
`;

const HomeTitle = styled.h2`
  color: #333;
`;

const HomeDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

function App() {
  return (
    <>
    <GlobalStyle/>
    <div className="App">
      <Navbar />
      <MainContainer>
        <Section id="home">
          <HomeTitle>Welcome to FireTracker</HomeTitle>
          <HomeDescription>
            Track potential fire zones and forecasted spread using real-time data.
          </HomeDescription>
        </Section>
        <Section>
          <FireMap/>
        </Section>
        <Section>
          <AboutUs />
        </Section>
        <Section>
          < Footer/>
        </Section>
      </MainContainer>
    </div>
    </>
  );
}

export default App;
