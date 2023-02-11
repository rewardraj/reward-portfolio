import styled from "styled-components"
import { motion } from "framer-motion"

export const ProjectContainer = styled(motion.div)`
    align-items: center;
    max-width: 1920px;
    padding: var(--gutter) var(--whitespace);
    position: relative;
    min-height: 100vh;
    width: 100%;

    @media (max-width:770px) {
        padding: var(--whitespace) var(--gutter);
        
    }

`

export const Wrapper = styled(motion.div)`
    padding: var(--whitespace) var(--gutter);
    display: grid;
    grid-template-columns: repeat(auto-fit, 440px);
    grid-gap: var(--whitespace) var(--gutter);
    max-width: 100%;
    align-items: center;
    justify-content: center;
`

export const ProjectIntro = styled(motion.div)`
    max-width: 600px;
    margin-bottom: 2.5rem;
    place-items: center;
    left: var(--gutter);
    position: relative;

    @media (max-width:770px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        left: 0;
        
    }
`

export const TextH2 = styled.h2`
    line-height: 1.2rem;
    text-align: left;
    margin: var(--whitespace) 0 var(--gutter);
    color: var(--text-primary);
    position: relative;

    &::before {
        font-size: 70px;
        content: "PROJECTS";
        line-height: 1.2rem;
        position: absolute;
        opacity: 0.1;
        top: -3.5rem;
        
    }

    @media (max-width:770px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`

export const TextP = styled.p`
    max-width: 24rem;
    margin-bottom: var(--gutter);
    font-size: 22px;
    color: var(--text-primary);

    @media (max-width:770px) {
        text-align: center;
        align-items: center;
    
    }
`
export const ProjectMain = styled(motion.div)`
    place-items: center;
    display: flex;
    flex-direction: column;
    

    &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease-in-out;
    }
`


export const Image = styled(motion.img)`
max-width: 380px;
border-radius: 20px;
cursor: pointer;
transform: scale(1); 
`

export const PreTitle = styled(motion.div)`
    font-size: var(--text-sm);
    color: var(--text-primary);
    padding: var(--default) 0;
`

export const Text = styled(motion.span)`
    color: var(--text-primary);
`