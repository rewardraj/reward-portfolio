import React from 'react'
import { BiUser} from 'react-icons/bi';
import { BsBriefcase, BsCardList, BsChatSquare } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { FaBars } from 'react-icons/fa';
import { Nav, 
NavbarContainer, 
NavLogo, 
MobileIcon,
NavMenu,
NavItems,
SocialIcons, 
SocialLink,
// NavBtn,
// NavBtnLink, 
StyledLink } from './NavbarElements'


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
                <BsCardList />
                <StyledLink to='contact'>Services</StyledLink>
            </NavItems>

            <NavItems>
                <BsChatSquare />
                <StyledLink to='contact'>Contact</StyledLink>
            </NavItems>
        </NavMenu>

        <SocialIcons>
                <SocialLink>
                    <FaGithub />
                </SocialLink>

                <SocialLink>
                    <FaLinkedin />
                </SocialLink>

                <SocialLink>
                    <FaTwitter />
                </SocialLink>

            </SocialIcons>
          {/* <NavBtn>
                <NavBtnLink to="/Resume">Resume</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
