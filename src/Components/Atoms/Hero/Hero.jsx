import React from 'react';
import Typed from '../Typed/Typed';
import FadeIn from '../../FadeIn/Fade';

import {
    HeroContainer,
    TextWrapper,
    HeroTitle,
    HeroDescription,
    ButtonWrapper,
    Text,
    SocialIcons,
    SocialLink,
   
} from './HeroElements';
import Button from '../Button/Button';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Hero = () => {
  return (
    <HeroContainer id="home">
        <TextWrapper>
            <FadeIn>
            <HeroTitle>REWARD EDOYUGBO</HeroTitle>
            </FadeIn>
            <HeroDescription>
                <Typed phrases={["developer...", "web designer...", "systems architect..."]} />
            </HeroDescription>
            <ButtonWrapper>
                <Button text={"Contact me"} size="1.2rem"/>
                <Text>My Portfolio</Text>
            </ButtonWrapper>

            <SocialIcons>
                <SocialLink>
                    <FaGithub />
                </SocialLink>

                <SocialLink>
                    <FaLinkedin />
                </SocialLink>

                <SocialLink>
                    <FaTwitter />
                </SocialLink>

            </SocialIcons>
        </TextWrapper>

      
    </HeroContainer>
  )
}

export default Hero
