import styled from "styled-components"

export const ProjectContainer = styled.div`
    align-items: center;
    max-width: 1920px;
    padding: var(--gutter) var(--whitespace) ;
    position: relative;
    min-height: 100vh;

    @media (max-width:770px) {
        padding: 0 var(--gutter);
        // display: flex;
        // flex-direction: column;
    }

`

export const TextWrapper = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;


     @media (max-width:770px) {
         justify-content: center;
         text-align: center;
         margin: 0;
         margin-bottom: var(--whitespace);
         
    }
`
export const TextH2 = styled.h2`
    color: var(--text-primary);
    font-weight: 600;
    font-size: 45px;
    
    @media (max-width:770px) {
        font-size: 38px;
        font-weight: 600;
        width: 100%;
    }
`
export const  TextP = styled.p`
    color: var(--text-primary);
    font-size: 22px;
    max-width: max-content;
`

export const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-left: -1rem;
margin-right: -1rem;
`

// export const Name = styled.h4``
// export const Description = styled.p``

export const Image = styled.img`
    height: 300px;
    width: 400px;
`
export const Overlay = styled.div`
width: calc(33.33% - 1rem);
margin-left: 1rem;
margin-right: 1rem;

@media (max-width: 992px) {
    width: 100%;
  }
`