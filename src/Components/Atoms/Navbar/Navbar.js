import React, { useState } from 'react'
import { BiUser} from 'react-icons/bi';
import { BsBriefcase, BsCardList, BsChatSquare } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { useSpring, animated } from'react-spring';
import { Nav, NavbarContainer, NavLogo, NavLinks, NavLinkWrapper, SocialIcons, SocialLink, MobileNavLinks, NavLink, MobileIcon } from './NavbarElements'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileNavLinksProps = useSpring({
    transform: isOpen ? `translateY(0%)` : `translateY(-50%)`,
    opacity: isOpen ? 1 : 0,
    config: { duration: 300 },
    ease: [0.6, 0.05, -0.01]
  });


  return (
    <Nav id='nav'>
      <NavbarContainer>
        <NavLogo to='home' src='/images/logo.png' />
        <MobileIcon>
          <FaBars size={30} onClick={() => setIsOpen(!isOpen)} color='#fff' />
        </MobileIcon>
        <NavLinks>
          <NavLinkWrapper>
            <BiUser />
            <NavLink to='about'>About</NavLink>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <BsBriefcase />
            <NavLink to='projects'>Projects</NavLink>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <BsCardList />
            <NavLink to='contact'>Services</NavLink>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <BsChatSquare />
            <NavLink to='contact'>Contact</NavLink>
          </NavLinkWrapper>
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
        <MobileNavLinks as={animated.div} isOpen={isOpen} style={mobileNavLinksProps}>
          <NavLinkWrapper>
            <BiUser />
            <NavLink to='about'>About</NavLink>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <BsBriefcase />
            <NavLink to='projects'>Projects</NavLink>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <BsCardList />
            <NavLink to='contact'>Services</NavLink>
          </NavLinkWrapper>
          <NavLinkWrapper>
            <BsChatSquare />
            <NavLink to='contact'>Contact</NavLink>
          </NavLinkWrapper>
        </MobileNavLinks>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
