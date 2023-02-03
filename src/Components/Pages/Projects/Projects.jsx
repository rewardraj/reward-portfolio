import React from 'react'
import Button from '../../Atoms/Button/Button'
import {
  ProjectContainer,
  TextWrapper,
  TextH2,
  TextP,
  Wrapper,
  Image,
  Overlay


} from './ProjectElements'
import { BsGithub } from 'react-icons/bs'


// const projectData = [
//   {
//     Name: "Robit",
//     description: "Lorem ipsum dolor sit amet. Qui corrupti fugit rem dolores alias nam tenetur esse est esse quibusdam. Sit ipsa temporibus a quisquam illo et voluptatem alias.",
//     link: ""
//   },

//   {
//     name: "Bike Rental",
//     description: "Lorem ipsum dolor sit amet. Qui corrupti fugit rem dolores alias nam tenetur esse est esse quibusdam. Sit ipsa temporibus a quisquam illo et voluptatem alias.",
//     link: ""
//   },

//   {
//     name: "Housing Api",
//     description: "Lorem ipsum dolor sit amet. Qui corrupti fugit rem dolores alias nam tenetur esse est esse quibusdam. Sit ipsa temporibus a quisquam illo et voluptatem alias.",
//     link: ""
//   }


// ]

const Projects = () => {
  return (
    <ProjectContainer>
 
        <TextWrapper>
          <TextH2>My Projects</TextH2>
          <TextP>Here are some of my work.</TextP>
          
        </TextWrapper>

        <Wrapper> 
            {/* Overlay filters */}
            <Overlay>
            <Image src='/images/bike.webp'></Image>
            </Overlay>

            <Overlay>
            <Image src='/images/bot.jpeg'></Image>
            </Overlay>

            <Overlay>
            <Image src='/images/bike.webp'></Image>
            </Overlay>
      </Wrapper>
      <Button text={"View More"} size="1rem" />
    </ProjectContainer>
  )
}

export default Projects
