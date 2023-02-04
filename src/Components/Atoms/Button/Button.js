import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
    border-radius: 20px;
    background: #3196e2;
    white-space: nowrap;
    padding: 15px 25px;
    color: #fffffe;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
    transition: all 0.3s ease-in-out;
    background: #fff;
    color: #010606;
`

const Button = ({text, size}) => {
  return (
    <StyledButton style={{ fontSize: size }}>{text}</StyledButton>
  )
}

Button.defaultProps = {
  size: '1rem'
};

export default Button
