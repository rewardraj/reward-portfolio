import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutContainer = styled.div`

    display: flex;
    align-items: center;
    // width: 100%;
    max-width: 1920px;
    padding: 0 var(--macro);
    gap: var(--default);
    position: relative;
    min-height: 100vh;
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
    margin: 20px 10%;
    text-align: left;
    max-width: 900px;


    @media screen and (max-width:770px) {
        text-align: center;
        justify-content: center;
        align-items: center;
    }
`

export const Title = styled.h2`
    font-size: var(--text-md);
    font-weight: 600;
    padding-bottom: var(--default);

    @media screen and (max-width:770px) {
        font-size: 40px;
        font-weight: 600;
    }
`

export const TitleH3 = styled.h3`
    
`

export const TextP = styled.p`
    font-size: 22px;
    font-weight: 400;
    line-height: var(--line-height-lg);
`

export const StatsContainer = styled.div`
    display: flex;
    gap: var(--whitespace);

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
    font-size: 50px;
    margin-bottom: 5px;
    color: var(--text-secondary);
    background: linear-gradient(to right, #ff0000, #ffff00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const Exp = styled.h3`
    font-style: primary;
    font-size: 20px;
`

