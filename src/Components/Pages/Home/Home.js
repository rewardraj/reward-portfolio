import React, { useState } from 'react';
import styled from 'styled-components';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
import Hero from '../../Atoms/Hero/Hero.js';
import Navbar from '../../Atoms/Navbar/Navbar.js';
import Projects from '../Projects/Projects.js';
import Services from '../Services/Services.js';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Home = () => {

    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen)
    };

  return (

    <Wrapper>
      <Navbar toggle={toggle} />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </Wrapper>
  )
}

export default Home
