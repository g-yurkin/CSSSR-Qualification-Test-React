import React from 'react';
import "./App.css";
import styled from 'styled-components';
import Header from './components/header';
import Info from './components/info';
import Checkboxes from './components/checkboxes';
import LevelJS from './components/leveljs';
import About from './components/about';
import Future from './components/future';
import Footer from './components/footer';

const App = () => (
  <Wrapper className="App">
    <Header />
    <Info />
    <Checkboxes />
    <LevelJS /> 
    <About />
    <Future />
    <Footer />
  </Wrapper>
)

const Wrapper = styled.section`
  width: 100%;
  max-width: 1000px;
  background-image: url(./assets/images/BG-part.jpg);
  margin: 0 auto;
  padding: 60px 115px;

  @media screen and (max-width: 960px) {
    
    padding: 60px 40px;
    
  }  
@media screen and (max-width: 767px) {
    
    padding: 60px 10px;
    
  }    
`;

export default App;
