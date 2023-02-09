import React, { useState } from 'react'
import { BiUser} from 'react-icons/bi';
import { BsBriefcase, BsCardList, BsChatSquare } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { FaBars } from 'react-icons/fa';
import { Nav, 
NavbarContainer, 
NavLogo, 
NavLinks,
NavLinkWrapper,
SocialIcons, 
SocialLink,
MobileNavLinks,
NavLink, 
MobileIcon} from './NavbarElements'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Nav id='nav'>
        <NavbarContainer>
        <NavLogo to='home' src='/images/logo.png'></NavLogo>
        <MobileIcon>
            <FaBars size={30} onClick={() => setIsOpen(!isOpen)} color='#fff' />
        </MobileIcon>
        <NavLinks>
            <NavLinkWrapper>
                <BiUser />
                <NavLink to='about'>About</NavLink>
            </NavLinkWrapper>

            <NavLink>
                <BsBriefcase />
                <NavLink to='projects'>Projects</NavLink>
            </NavLink>

            <NavLink>
                <BsCardList />
                <NavLink to='contact'>Services</NavLink>
            </NavLink>

            <NavLink>
                <BsChatSquare />
                <NavLink to='contact'>Contact</NavLink>
            </NavLink>
        </NavLinks>

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

            <MobileNavLinks isOpen={isOpen}>
            <NavLink>
                <BiUser />
                <NavLink to='about'>About</NavLink>
            </NavLink>

            <NavLink>
                <BsBriefcase />
                <NavLink to='projects'>Projects</NavLink>
            </NavLink>

            <NavLink>
                <BsCardList />
                <NavLink to='contact'>Services</NavLink>
            </NavLink>

            <NavLink>
                <BsChatSquare />
                <NavLink to='contact'>Contact</NavLink>
            </NavLink>

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
            </MobileNavLinks>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
