import React, { useState } from 'react'
import Navbar from '../../Atoms/Navbar/Navbar'
import Hero from '../../Atoms/Hero/Hero';
import About from '../About/About';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

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
