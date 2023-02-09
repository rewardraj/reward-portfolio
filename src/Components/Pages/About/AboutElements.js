import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutContainer = styled.div`
   width: 100%;
   max-width: 1920px;
   min-height: 100vh;
   position: relative;
`

export const AboutSection = styled.section`

padding: var(--gutter) var(--macro);
display: flex;
align-items: center;
gap: var(--default);
min-height: 60vh;
width: 100%;
justify-content: space-between;



@media (max-width:770px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
`



export const ImageWrapper = styled(motion.img)`
    flex-basis: 30%;
    position: relative;
    // bottom: 10%;
    mix-blend-mode: lighten;


`

export const TextWrapper = styled(motion.div)`
    color: var(--text-primary);
    flex-basis: 70%;
    margin: var(--macro) var(--macro);
    text-align: left;
    align-items: left;
    gap: var(--default);
    max-width: 900px;
    

    @media screen and (max-width:770px) {
        text-align: center;
        justify-content: center;
        align-items: center;
    }
`

export const Title = styled.h2`
    font-size: var(--text-lg);
    font-weight: 600;
    padding-bottom: var(--default);

    @media screen and (max-width:770px) {
        font-size: 40px;
        font-weight: 600;
    }
`

export const TitleH3 = styled.h3`
    padding-bottom: var(--gutter);
`

export const TextP = styled.p`
    font-size: 22px;
    font-weight: 400;
    font-size: 24px;
    padding-bottom: var(--gutter);
    line-height: var(--line-height-lg);
`

export const StatsContainer = styled.div`
    display: flex;
    gap: var(--whitespace);
    padding-bottom: var(--gutter);

    @media (max-width:770px) {
        gap: var(--gutter);
    }
`
export const StatsWrapper = styled.div`

@media screen and (max-width:770px) {
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}
`
export const StatsHolder = styled.div`
    font-size: 60px;
    margin-bottom: 5px;
    color: #f46c3f;
`

export const Exp = styled.h3`
    font-style: primary;
    font-size: 22px;
`
export const SkillSection = styled.section`
    width: 100%;
    position: relative;
    color: var(--text-primary);
    background-color: var(--background-primary);
    
    
`
export const SkillNav = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: var(--default);
   min-height: 120px;
   place-items: center;
//    padding: var(--gutter) var(--whitespace);
   justify-content: space-evenly;
`

export const SkillItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-items: center;
`

export const SkillImage = styled(motion.img)`
height: 50px;
width: 50px;
// margin: 0 20px;
cursor: pointer;
transition: transform 0.5s;

&:hover {
    transform: translateY(-5px);
}
`