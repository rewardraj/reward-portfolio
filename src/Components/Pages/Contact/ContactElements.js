import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    max-width: 1920px;
    padding: var(--macro) var(--whitespace);
    position: relative;
    min-height: 100vh;
    width: 100%;
    display: flex;

    @media (max-width:880px) {
        display: flex;
        flex-direction: column; 
        padding: 0 var(--gutter);
        margin-top: var(--macro);
    }

`

export const FormHeading = styled.div`

`
export const TextWrapper = styled.div`
    color: var(--text-primary);
    flex-basis: 45%;
    align-items: center;
    justify-content: center;
    padding: var(--whitespace) var(--macro);

    @media (max-width:770px) {
        text-align: center;
        padding: 0 var(--gutter);
    }    
`
export const TextH4 = styled.h4`
    font-size: var(--text-sm);
 
`

export const TextH2 = styled.h2`
    font-size: var(--text-lg);
    margin: 0;
    font-size: 68px;

    @media (max-width:770px) {
        font-size: var(--text-lg);
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-basis: 50%;
    gap: 1.5rem;
    margin-top: var(--gutter);
    border: 0.5px solid var(--text-primary);
    border-radius: 1rem;
    padding: var(--gutter) var(--gutter);
    color: var(--text-primary);
`

export const Input = styled.input`
    background: transparent;
    border-bottom-width: 1px;
    padding: var(--gutter) 0;
    border-right: none;
    border-top: none;
    border-left: none;
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
        color: var(--text-primary);
        font-size: 16px;
    }
    
`

export const Textarea = styled.textarea`
background: transparent;
    border-bottom-width: 1px;
    padding: var(--whitespace) 0;
    border-right: none;
    border-left: none;
    border-top: none;
    outline: none;
    width: 100%;
    resize: none;
    margin-bottom: var(--gutter);
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
        color: var(--text-primary);
        font-size: 16px;
    }
`