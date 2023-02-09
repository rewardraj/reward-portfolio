import React from 'react'

// intersection observer hook
import { useInView } from 'react-intersection-observer';

//Countup
import CountUp from 'react-countup';

// Fade in
// import FadeIn from '../../FadeIn/Fade';



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
  SkillSection,
  SkillNav,
  SkillItem,
  SkillImage
} from './AboutElements';
import aboutBG from '../../Photos/aboutBG.png'
import Button from '../../Atoms/Button/Button';





const About = () => {
  
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <AboutContainer id='about'>

      <AboutSection ref={ref}> {inView ?
      <ImageWrapper src={aboutBG} 
      initial={{ x: -100, opacity: 0}}
      animate={{ x: 0, opacity: 1}}
      transition={{
        duration: 0.8,
        delay: 0.2,
        easein: [0, 0.71, 0.2, 1.01]
      }} />
        
    

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
      </TextWrapper> : null}
  </AboutSection>


<SkillSection>
      <SkillNav>
        <SkillItem>
          <SkillImage src='/styles/icons/html5.svg' />
        </SkillItem>
        <SkillItem>
          <SkillImage src='/styles/icons/css3.svg' />
        </SkillItem>
        <SkillItem>
          <SkillImage src='/styles/icons/javascript.svg'/>
        </SkillItem>
        <SkillItem>
          <SkillImage src='/styles/icons/react.svg'/>
        </SkillItem>
        <SkillItem>
          <SkillImage src='/styles/icons/nodejs-icon.svg'/>
        </SkillItem>
        <SkillItem>
        <SkillImage src='/styles/icons/Git_icon.svg'/>
        </SkillItem>
        <SkillItem>
          <SkillImage src='/styles/icons/svelte-icon.svg'/>
        </SkillItem>
      </SkillNav>
</SkillSection>   

    </AboutContainer> 
  )
}

export default About
