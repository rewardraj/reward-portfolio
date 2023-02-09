import React from 'react'
import Button from '../../Atoms/Button/Button'
import {
  ProjectContainer,
  ProjectIntro,
  TextH2,
  TextP,
  Image,
  PreTitle,
  ProjectMain,
  Text,
  Wrapper,

} from './ProjectElements'


const Projects = () => {

  // const [ref, inView] = useInView({
  //   threshold: 0.3,
  // });
  
  return (
    <ProjectContainer> 
      <Wrapper> 
      <ProjectIntro>
        <TextH2>My Projects</TextH2>
        <TextP>Lorem ipsum dolor sit amet. Qui corrupti fugit rem dolores alias nam tenetur esse est esse quibusdam. 
              Sit ipsa temporibus a quisquam 
              illo et voluptatem alias.
        </TextP>
        <Button text={"View More"} size="1.2rem"/>
      </ProjectIntro>
      
       <ProjectMain>
        <Image src='/images/bike.webp'/>
        <PreTitle>Bike Rental</PreTitle>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </ProjectMain> 

      <ProjectMain>
        <Image src='/images/bot.jpeg'/>
        <PreTitle>Robit</PreTitle>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </ProjectMain>

      <ProjectMain>
        <Image src='/images/bike.webp'/>
        <PreTitle>Bike Rental</PreTitle>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </ProjectMain>
      
      <ProjectMain>
        <Image src='/images/bike.webp'/>
        <PreTitle>Bike Rental</PreTitle>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </ProjectMain> 

      <ProjectMain>
        <Image src='/images/bot.jpeg'/>
        <PreTitle>Robit</PreTitle>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </ProjectMain>

      </Wrapper> 

    </ProjectContainer>
  )
}

export default Projects
