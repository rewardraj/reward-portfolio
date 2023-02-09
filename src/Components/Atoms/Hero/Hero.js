import React from 'react';
import Typed from '../Typed/Typed';
import FadeIn from '../../FadeIn/Fade';
import HeroBg from '../../Photos/heroBG.png';

import {
    HeroContainer,
    TextWrapper,
    HeroTitle,
    HeroP,
    HeroDescription,
    ButtonWrapper,
    // Text,
    // SocialIcons,
    // SocialLink,
    ImageWrapper,
    // HeroSection
   
} from './HeroElements';
import Button from '../Button/Button';
import { useInView } from 'react-intersection-observer';


const Hero = () => {

    const [ref, inView] = useInView({
        threshold: 0.2,
      });


  return (
    // <HeroSection>
    <HeroContainer id="home" ref={ref}>
        <TextWrapper>
            <FadeIn>
                <HeroP>Hi! 👋, my name is</HeroP>
            <HeroTitle>REWARD EDOYUGBO</HeroTitle>
            </FadeIn>
            <HeroDescription>
                <Typed phrases={["developer...", "web designer...", "systems architect..."]} />
            </HeroDescription>
            <ButtonWrapper>
                <Button text={"Contact me"} size="1.2rem"/>
                {/* <Text>My Portfolio</Text> */}

                
            </ButtonWrapper>

            
        </TextWrapper> { inView ? 

        <ImageWrapper src={HeroBg}
        initial={{ x: 100, opacity: 0}}
        animate={{ x: 0, opacity: 1}}
        transition={{
          duration: 0.8,
          delay: 0.2,
          easein: [0, 0.71, 0.2, 1.01]
        }}
        /> : null }
      
    </HeroContainer>
    // </HeroSection>
  )
}

export default Hero
