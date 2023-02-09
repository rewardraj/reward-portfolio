import styled from "styled-components";
import { Link } from "react-router-dom";



export const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    z-index: 1000;
    min-height: 75px;
    background-color: #141e30;
    background-image: linear-gradient(348deg, #141e30 0%, #243b55 100%);
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.3s;
    
    &:scrolled-down {
        height: 80px;
        box-shadow: 0 10px 50px rgba(0, 0, 0, 0.14);
    }
`

export const NavbarContainer = styled.div`
    margin: 1rem 8%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const MobileIcon = styled.div`
    display: none;

    @media (width <= 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;

    }
`

export const NavLogo = styled.img`
    display: flex;
    height: 3rem;
    cursor: pointer;
    width: 3rem;
    background-color: #fff;
    border-radius: 50%;


`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin-left: 2rem;
    gap: 16px;

    @media screen and (max-width: 768px) {
        display: none;
    }

`
export const NavItems = styled.li`
    font-size: 20px;
    color:var(--text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem;
`
export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    text-align: center;
    color:var(--text-primary);
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
    
`

// export const NavBtn = styled.nav`
//     display: flex;
//     align-items: center;

//     @media screen and (max-width: 768px) {
//         display: none;
//     }
// `

export const NavBtnLink = styled(Link)`
    border-radius: 20px;
    background: #3196e2;
    white-space: nowrap;
    padding: 10px 20px;
    color: #fffffe;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
    transition: all 0.3s ease-in-out;
    background: #fff;
    color: #010606;
}
`

export const SocialIcons = styled.div`
    display: flex;
    font-size: 22px;
    gap: 30px;
    color: var(--text-primary);
    justify-content: center;
    transition: 0.3s;
    // max-width: max-content;
    // margin: var(--gutter) auto;
`

export const SocialLink = styled.a`
    cursor: pointer;

    @media (width <= 900px) {
        display: none;
    }
`