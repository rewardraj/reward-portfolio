import React, { useState } from 'react'
import Navbar from '../../Atoms/Navbar/Navbar.jsx'
import Hero from '../../Atoms/Hero/Hero.jsx';
import About from '../About/About.jsx';
import Services from '../Services/Services.jsx';
import Projects from '../Projects/Projects.jsx';
import Contact from '../Contact/Contact.jsx';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen)};

  return (
    <>
      <Navbar toggle={toggle}/>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      
    </>
  )
}

export default Home
