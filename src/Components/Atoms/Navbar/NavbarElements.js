import styled from "styled-components";

export const MobileIcon = styled.div`
    display: none;

    @media (width <= 768px) {
        color: #fff;
        cursor: pointer;
        display: block;
        font-size: 1.8rem;
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(-100%, 50%);
    }
`

export const MobileNavLinks = styled.div`
    display: none;

    @media (max-width: 768px) {
        background-color: #141e30;
        position: absolute;
        background-image: linear-gradient(348deg, #141e30 0%, #243b55 100%);
        display: ${props => (props.isOpen ? 'block' : 'none')};
        left: 0;
        padding: 10px;
        right: 0;
        top: 80px;
    }
`

export const Nav = styled.nav`
    align-items: center;
    background-color: #141e30;
    background-image: linear-gradient(348deg, #141e30 0%, #243b55 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    min-height: 75px;
    padding: 0 20px;
    position: fixed;
    top: 0;
    transition: 0.3s;
    width: 100%;
    z-index: 1000;
`

export const NavbarContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 1rem 8%;
    width: 100%;
`

export const NavLinks = styled.ul`
    align-items: center;
    display: flex;
    gap: 16px;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
        display: none;
    }
`

export const NavLink = styled.li`
    align-items: center;
    color: var(--text-primary);
    cursor: pointer;
    display: flex;
    font-size: 20px;
    height: 100%;
    padding: 0 1rem;
    text-align: center;
    text-decoration: none;

    &.active {
        border-bottom: 3px solid #01bf71;
    }

    @media (max-width: 768px) {
        margin: 10px 0;
        text-align: center;
    }
`

export const NavLinkWrapper = styled.div`
    align-items: center;
    color: var(--text-primary);
    display: flex;
`

export const NavLogo = styled.img`
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: 3rem;
    width: 3rem;
`

export const SocialIcons = styled.div`
    display: flex;
    font-size: 20px;
    gap: 30px;
    color: var(--text-primary);
    justify-content: center;
    transition: 0.3s;
`;

export const SocialLink = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 980px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    }
`;