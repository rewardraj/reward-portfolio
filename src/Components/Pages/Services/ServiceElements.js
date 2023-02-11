import styled from "styled-components";
import { motion } from "framer-motion";

export const ServicesContainer = styled(motion.div)`
    align-items: center;
    max-width: 1920px;
    padding: var(--whitespace) var(--whitespace) 0;
    position: relative;
    min-height: 100vh;

    @media (max-width:770px) {
        padding: var(--whitespace) var(--gutter);
        display: flex;
        flex-direction: column;
    }

`;

export const TextWrapper = styled(motion.div)`
   float: center;
   text-align: center;
   padding: var(--whitespace) 0 0;

    @media (max-width:770px) {
        justify-content: center;
        text-align: center;
        margin: 0;
        margin-bottom: var(--whitespace);
}
`

export const HeadingWrapper = styled.div`
    justify-content: center;
    align-items: center;
    
`

export const TextH2 = styled.h2`
    color: var(--text-primary);
    font-weight: 600;
    font-size: 45px;
    display: block;
    position: relative;
    margin-bottom: var(--default);

    @media (max-width:770px) {
        font-size: 38px;
        font-weight: 600;
        width: 100%;
    }
 
    &::before {
        font-size: 80px;
        content: "SERVICES";
        position: absolute;
        opacity: 0.1;
        text-align: center;
        top: -2.5rem;
        left: 0;
        right: 0;
        // overflow: hidden;
        

    }

`

export const TextH3 = styled.h3`
    color: var(--text-primary);
    font-size: 26px;
    font-weight: 400;
    word-wrap: wrap;
    margin-bottom: var(--default);
    line-height: var(--line-height-lg);
    
`

export const ServicesWrapper = styled(motion.div)`
   color: var(--text-primary);
   padding: var(--whitespace) var(--whitespace) 0;
   font-size: 22px;

   @media(max-width:770px) {
    margin: var(--gutter) 0;
    justify-content: center;
    text-align: center;
   }
`

export const ServicesHandler = styled.div`
`

export const Container= styled(motion.div)`
   border-bottom: 1px solid;
   border-color: rgb(255, 255, 255, 0.4);
   padding: 20px 0;
   text-align: left;
   justify-content: left;
   display: flex;
   
`
export const Wrapper= styled.div`
    margin-bottom: 38px;
    

`
export const NameWrapper = styled(motion.div)`
   padding-bottom: 10px;
   font-weight: 600;
   text-align: left;
   font-size: var(--text-md);
`
export const LinkWrapper = styled.a`
   cursor: pointer;
   font-size: var(--text-md);
`
export const DescWrapper = styled(motion.div)`
   font-size: 20px;
`