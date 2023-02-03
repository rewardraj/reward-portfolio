import React from 'react'
import { BiUser} from 'react-icons/bi';
import { BsBriefcase, BsChatSquare } from 'react-icons/bs';

import { FaBars } from 'react-icons/fa';
import { Nav, 
NavbarContainer, 
NavLogo, 
MobileIcon,
NavMenu,
NavItems,
NavBtn,
NavBtnLink, 
StyledLink} from './NavbarElements'


const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav id='nav'>
        <NavbarContainer>
        <NavLogo to='home' src='/images/logo.png'></NavLogo>

        <MobileIcon onclick={toggle}>
            <FaBars />
        </MobileIcon>

        <NavMenu>
            <NavItems>
                <BiUser />
                <StyledLink to='about'>About</StyledLink>
            </NavItems>

            <NavItems>
                <BsBriefcase />
                <StyledLink to='projects'>Projects</StyledLink>
            </NavItems>

            <NavItems>
                <BsChatSquare />
                <StyledLink to='contact'>Contact</StyledLink>
            </NavItems>

            <NavBtn>
                <NavBtnLink to="/Resume">Resume</NavBtnLink>
            </NavBtn>
        </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
