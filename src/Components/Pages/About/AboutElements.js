import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutContainer = styled(motion.div)`
   width: 100%;
   max-width: 1920px;
   min-height: 100vh;
   position: relative;
   
`


export const AboutSection = styled(motion.section)`
   align-items: center;
   display: flex;
   justify-content: space-between;
   padding: var(--whitespace) var(--macro);
   
   width: 100%;

   @media (max-width:770px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
`

export const Exp = styled.h3`
   font-size: 22px;
   font-style: primary;
`

export const ImageWrapper = styled(motion.img)`
   flex-basis: 30%;
   mix-blend-mode: lighten;
   position: relative;
`



export const StatsContainer = styled.div`
   display: flex;
   gap: var(--whitespace);
   padding-bottom: var(--gutter);

   @media (max-width:770px) {
      gap: var(--gutter);
   }
`

export const StatsHolder = styled.div`
   color: #f46c3f;
   font-size: 60px;
   margin-bottom: 5px;
`

export const StatsWrapper = styled.div`
   @media screen and (max-width:770px) {
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      text-align: center;
   }
`


export const TextWrapper = styled(motion.div)`
    color: var(--text-primary);
    flex-basis: 70%;
    margin: var(--macro) var(--macro);
    text-align: left;
    align-items: left;
    // gap: var(--default);
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
    padding-bottom: var(--default);
    line-height: var(--line-height-lg);
`
