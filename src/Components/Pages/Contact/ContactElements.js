import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  
    max-width: 1920px;
   

`

export const FormHeading = styled.div`
`
export const TextWrapper = styled.div`
    color: var(--text-primary);
`
export const TextH4 = styled.h4`
    font-size: var(--text-sm);
 
`

export const TextH2 = styled.h2`
font-size: var(--text-lg);
margin: 0;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text-primary);
`

export const Input = styled.input`
    background: transparent;
    border-bottom-width: 1px;
    padding-top: 0.75rem;
    border-right: none;
    outline: none;
    width: 100%;

    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;

    &::placeholder {
        color: var(--text-primary);
        font-weight: bold;
        opacity: 0.8;
    }

    &:focus {
        border-bottom: 1px solid white;
    }
    
`