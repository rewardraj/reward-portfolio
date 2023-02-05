import React, { useState } from 'react'
import styled from'styled-components'
import Navbar from '../../Atoms/Navbar/Navbar.jsx'
import Hero from '../../Atoms/Hero/Hero.jsx';
import About from '../About/About.jsx';
import Services from '../Services/Services.jsx';
import Projects from '../Projects/Projects.jsx';
import Contact from '../Contact/Contact.jsx';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen)};


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100vw;
`

  return (

    <Wrapper>
      <Navbar toggle={toggle}/>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </Wrapper>
  )
}

export default Home
