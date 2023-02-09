import styled from "styled-components"

export const ProjectContainer = styled.div`
    align-items: center;
    max-width: 1920px;
    padding: var(--macro) var(--whitespace);
    position: relative;
    min-height: 100vh;
    width: 100%;

    @media (max-width:770px) {
        padding: 0 var(--gutter);
    }

`

export const Wrapper = styled.div`
    padding: var(--whitespace) var(--gutter);
    display: grid;
    grid-template-columns: repeat(auto-fit, 440px);
    grid-gap: var(--whitespace) var(--gutter);
    max-width: 100%;
    align-items: center;
    justify-content: center;
`

export const ProjectIntro = styled.div`
    max-width: 600px;
    margin-bottom: 2.5rem;
`

export const TextH2 = styled.h2`
    line-height: 1.2rem;
    text-align: left;
    margin: var(--whitespace) 0 var(--gutter);
    color: var(--text-primary);
    position: relative;

    &::before {
        font-size: 70px;
        content: "PROJECTS";
        line-height: 1.2rem;
        position: absolute;
        opacity: 0.1;
        float: left;
        text-align: left;
        left: -0.5rem;
        top: -3.5rem;
        right: 0;
        // overflow: hidden;
        

    }
`

export const TextP = styled.p`
    max-width: 24rem;
    margin-bottom: var(--gutter);
    font-size: 22px;
    color: var(--text-primary);
`
export const ProjectMain = styled.div`
    position: relative;
    align-items: center;
    place-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease-in-out;
    }
`


export const Image = styled.img`
max-width: 380px;
border-radius: 20px;
cursor: pointer;
transform: scale(1); 

// &:hover {
//     transform: scale(1.05);
// }
`

export const PreTitle = styled.div`
    font-size: var(--text-sm);
    color: var(--text-primary);
    padding: var(--default) 0;

    // &:hover {
    //     bottom: 6rem;
        
    // }
`

export const Text = styled.span`
    color: var(--text-primary);
`