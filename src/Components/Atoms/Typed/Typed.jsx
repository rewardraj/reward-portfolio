import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
    0% {opacity: 1;}
    50% {opacity: 0;}
    100% {opacity: 1;}
`

const DescText = styled.div`
    width: max-content;
    text-align: left;
    // display: flex;
    font-size: var(--text-md);
    font-weight: bold;
    justify-self: left;

    @media screen and (max-width:768px) {
        font-size: 25px;
        gap: 10px;
        justify-content: center;
        align-items: center;
        display flex;
    }
`
const Blinker = styled.span`
    animation: ${blink} 1.2s linear infinite;
    color: var(--text-primary);
`

const Span = styled.span`
    align-items: center;
    justify-content: center;
    color: #2de1db;
`

const Typed = ({ phrases = [] }) => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [phase, setPhase] = useState("");

    useEffect(() => {
      const type = () => {
        let phrase = phrases[index];
        if (!phase) {
          setPhase("insert");
        }
  
        switch(phase) {
          case "insert":
            if (text.length < phrase.length) {
              setText(text + phrase[text.length]);
            }
            else {
              setPhase("hold");
            }
            break;
          case "hold":
            setPhase("delete");
            break;
          case "delete":
            if (text.length > 0) {
              setText(text.substring(0, text.length - 1));
            }
            else {
              setPhase("insert");
              setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            }
            break;
        default: 
            console.log("Unknown phrase");
        }
      }
  
      setTimeout(type, phase !== "hold" ? 150 : 1000);
    }, [index, text, phase, phrases])

  return (
    <>
      <DescText> I AM A <Span>{text}</Span></DescText> 
      <Blinker>|</Blinker>
    </>
  )
}

export default Typed
