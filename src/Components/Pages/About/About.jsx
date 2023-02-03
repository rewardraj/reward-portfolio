import React from 'react'

// intersection observer hook
import { useInView } from 'react-intersection-observer';

//Countup
import CountUp from 'react-countup';

// Fade in
// import FadeIn from '../../FadeIn/Fade';



import { 
  AboutContainer,
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





const About = () => {
  
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <AboutContainer id='about' ref={ref}>{inView ?
   
      <ImageWrapper src='/images/about.png' 
      initial={{ x: -100, opacity: 0}}
      animate={{ x: 0, opacity: 1}}
      transition={{
        duration: 0.8,
        delay: 0.2,
        easein: [0, 0.71, 0.2, 1.01]
      }}>
        
      </ImageWrapper>

    : null}

      {inView ? <TextWrapper
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
              <CountUp end={8} duration={0.8}/> 
            </StatsHolder>
            <Exp>Projects <br />Completed</Exp>
          </StatsWrapper>

          <StatsWrapper>
            <StatsHolder>
              <CountUp end={4} duration={0.8}/>
            </StatsHolder>
            <Exp>Satisfied <br />Customers</Exp>
          </StatsWrapper>
        </StatsContainer>
      </TextWrapper> : null}
    


    </AboutContainer> 
  )
}

export default About
