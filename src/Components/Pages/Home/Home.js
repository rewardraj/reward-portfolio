import React, { useState } from 'react'
import styled from'styled-components'
import Navbar from '../../Atoms/Navbar/Navbar.js'
import Hero from '../../Atoms/Hero/Hero.js';
import About from '../About/About.js';
import Services from '../Services/Services.js';
import Projects from '../Projects/Projects.js';
import Contact from '../Contact/Contact.js';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen)};


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
`

  return (

    <Wrapper>
      <Navbar toggle={toggle}/>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </Wrapper>
  )
}

export default Home
