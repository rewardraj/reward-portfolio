import { motion } from "framer-motion";
import styled from "styled-components";

export const HeroContainer = styled.div`
    display: flex;
    align-content: center;
    place-items: center;
    // width: 100%;
    max-width: 1920px;
    padding: var(--gutter) var(--macro);
    gap: var(--whitespace);
    position: relative;
    min-height: 100vh;
    justify-content: left;
    color: var(--text-primary);

    @media (max-width:768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    // @media (max-width: 850px) {
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    // }

`

export const TextWrapper = styled.div`
    // margin-left: 5%;
    flex-basis: 55%;
    font-family: var(--future-pt);

    @media (max-width:768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
   
`

export const HeroTitle = styled.h1`
    font-size: 4.5rem;
    font-weight: 600;
    margin: 0;

    @media screen and (max-width:768px) {
        font-size: 3rem;
        margin: 10px auto;
        text-align: center;
        justify-content: center;
    }
    
`

export const HeroDescription = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    font-size: 36px;
    font-weight: semibold;

    @media (max-width:768px) {
        justify-content: center;
    }

`
export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    gap: var(--gutter);
    margin: 0 auto;
    text-align: center;
    padding-top: var(--default);
    
`

export const Text = styled.a`
    font-size: 22px;
    cursor: pointer;
    background: linear-gradient(to right, #ff0000, #ffff00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const SocialIcons = styled.div`
    display: flex;
    font-size: 30px;
    gap: 30px;
    justify-content: center;
    transition: 0.3s;
    // max-width: max-content;
    // margin: var(--gutter) auto;
`

export const SocialLink = styled.a`
    cursor: pointer;
`

export const ImageWrapper = styled(motion.img)`
    height: 520px;
    width: 600px;
    flex-basis: 43%;
    mix-blend-mode: exclusion;
    border: 1px solid  rgba(255, 255, 255, 0.5);
    border-radius:35% 65% 54% 46% / 62% 36% 64% 38%;
    transition: border-radius 500ms ease-in-out;

    &:hover {
        border-radius: 54% 46% 20% 80% / 25% 13% 87% 75% ;
    }

    @media (max-width:768px) {
        display: none;
    }

    
`