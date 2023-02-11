import React from 'react'
import styled from 'styled-components';
import htmlImage from './Icons/html5.svg';
import cssImage from './Icons/css3.svg';
import JsImage from './Icons/javascript.svg';
import nodeImage from './Icons/nodejs-icon.svg';
import svelteImage from './Icons/svelte-icon.svg';
import reactImage from './Icons/React-icon.svg';
import gitImage from './Icons/Git_icon.svg';
import FlipCard from '../../Atoms/Cards/FlipCard';
import aboutBG from '../../Photos/aboutBG.png'
import Button from '../../Atoms/Button/Button';
import { motion } from 'framer-motion';

//Countup
import CountUp from 'react-countup';

import { 
  AboutContainer,
  AboutSection,
  ImageWrapper,
  TextWrapper,
  Title,
  TitleH3,
  TextP,
  StatsContainer,
  StatsWrapper,
  StatsHolder,
  Exp,
} from './AboutElements';



const SkillsContainer = styled.div`
    align-items: center;
    max-width: 1920px;
    gap: var(--gutter);
    padding: var(--whitespace) var(--whitespace);
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
`


const About = () => {
  
  return (
    <AboutContainer id='about'>

      <AboutSection as={motion.div}> 
       <ImageWrapper src={aboutBG} 
      initial={{ x: -100, opacity: 0}}
      animate={{ x: 0, opacity: 1}}
      transition={{
        duration: 0.8,
        delay: 0.2,
        easein: [0, 0.71, 0.2, 1.01]
      }} />
        
    


      <TextWrapper as={motion.div}
        initial={{ x: 100, opacity: 0}}
        animate={{ x: 0, opacity: 1}}
        transition={{
          duration: 0.8,
          delay: 0.2,
          easein: [0, 0.71, 0.2, 1.01]
        }}

      >
        <Title>About Me</Title>
        <TitleH3>I'm a Freelance Front-end Dev with 2 years of experience</TitleH3>
        <TextP>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque labore exercitationem, non molestias eos enim fugiat nisi ut voluptatum omnis.
        </TextP>
        
        {/* stats section */}
        <StatsContainer>
          <StatsWrapper>
            <StatsHolder>
              <CountUp end={2} duration={0.8}/> 
            </StatsHolder>
            <Exp>Years of <br />Experience</Exp>
          </StatsWrapper>

          <StatsWrapper>
            <StatsHolder>
              <CountUp end={14} duration={0.8}/> 
            </StatsHolder>
            <Exp>Projects <br />Completed</Exp>
          </StatsWrapper>

          <StatsWrapper>
            <StatsHolder>
              <CountUp end={20} duration={0.8}/>
            </StatsHolder>
            <Exp>Satisfied <br />Customers</Exp>
          </StatsWrapper>
        </StatsContainer>
        <Button text={"My Resume"} size={"1rem"} margin={"var(--gutter) 0"} />
      </TextWrapper>

      <SkillsContainer>
        <FlipCard frontImage={htmlImage}  imageSize="100px" cardColor="#E44D26" progress={90} bgcolor={"#1572B6"}/>
        <FlipCard frontImage={cssImage}  imageSize="100px" cardColor="#1572B6" progress={60} bgcolor={"#E44D26"} />
        <FlipCard frontImage={JsImage} imageSize="100px" cardColor="#F7DF1E" progress={70} bgcolor={"#E44D26"}/>
        <FlipCard frontImage={svelteImage} imageSize="100px" cardColor="#E44D26" progress={70} bgcolor={"#1572B6"}/>
        <FlipCard frontImage={reactImage} imageSize="100px" cardColor="#000" progress={90} bgcolor={"#E44D26"}/>
        <FlipCard frontImage={gitImage} imageSize="100px" cardColor="#1572B6" progress={90} bgcolor={"#E44D26"}/>
        <FlipCard frontImage={nodeImage} imageSize="100px" cardColor="#215732" progress={40} bgcolor={"#1572B6"}/>

  
  </SkillsContainer>
  </AboutSection>

  

</AboutContainer> 
  )
}

export default About
