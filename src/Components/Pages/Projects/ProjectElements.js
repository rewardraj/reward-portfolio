import styled from "styled-components"

export const ProjectContainer = styled.div`
    align-items: center;
    max-width: 1920px;
    padding: var(--gutter) var(--whitespace);
    position: relative;
    min-height: 100vh;
    width: 120%;

    @media (max-width:770px) {
        padding: 0 var(--gutter);
    }

`

export const Wrapper = styled.div`
    padding: var(--gutter) var(--gutter);
    grid-template-columns: repeat(auto-fit, 440px);
    grid-gap: var(--whitespace);
    max-width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
`

export const ProjectIntro = styled.div`
    max-width: 600px;
    margin-bottom: 2.5rem;
`

export const TextH2 = styled.h2`
    line-height: 1.2rem;
    margin-bottom: var(--gutter);
    color: var(--text-primary);
    font-size: var(--text-lg)

`

export const TextP = styled.p`
    max-width: 24rem;
    margin-bottom: var(--gutter);
    font-size: 22px;
    color: var(--text-primary);
`
export const ProjectMain = styled.div`
    position: relative;
    // overflow: hidden;
    width: 100%;
    max-width: 450px;
    // margin: 0 auto;
    border-radius: 0.75rem;
    // background: #3196e2;
    border: 1px solid rgba(255, 255, 255, 0.5);

    &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease-in-out;
    }
`


export const Image = styled.img`
height: auto;
width: 100%;
border-radius: 0.40rem;
transition-property: transform;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 500ms;
cursor: pointer;
transform: scale(1); 

// &:hover {
//     transform: scale(1.05);
// }
`

export const PreTitle = styled.div`
    // position: absolute;
    // bottom: -100%;
    // left: 3rem;
    font-size: var(--text-sm);
    color: var(--text-primary);

    transition-property: transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 500ms;
        z-index: 50;

    // &:hover {
    //     bottom: 6rem;
        
    // }
`

export const Text = styled.span`
    color: var(--text-primary);
`