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
import { useInView } from 'react-intersection-observer';


const Projects = () => {

  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  
  return (
    <ProjectContainer ref={ref}>
      <Wrapper> {inView ?
      <ProjectIntro 
      initial={{ x: -100, opacity: 0}}
      animate={{ x: 0, opacity: 1}}
      transition={{
        duration: 0.8,
        delay: 0.2,
        easein: [0, 0.71, 0.2, 1.01]
      }}
       >
        <TextH2>& Collaborations</TextH2>
        <TextP>Lorem ipsum dolor sit amet. Qui corrupti fugit rem dolores alias nam tenetur esse est esse quibusdam. 
              Sit ipsa temporibus a quisquam 
              illo et voluptatem alias.
        </TextP>
        <Button text={"View More"} size="1.2rem"/>
      </ProjectIntro> : null}
     
       
      {inView ?
       <ProjectMain
       initial={{ x: 100, opacity: 0}}
       animate={{ x: 0, opacity: 1}}
       transition={{
         duration: 0.8,
         delay: 0.2,
         easein: [0, 0.71, 0.2, 1.01]
       }}
       >
        <Image src='/images/bike.webp'/>
        <PreTitle>Bike Rental</PreTitle>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </ProjectMain> : null}

      {inView ? <ProjectMain
        initial={{ x: 100, opacity: 0}}
        animate={{ x: 0, opacity: 1}}
        transition={{
          duration: 0.8,
          delay: 0.2,
          easein: [0, 0.71, 0.2, 1.01]
        }}
      >
        <Image src='/images/bot.jpeg'/>
        <PreTitle>Robit</PreTitle>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </ProjectMain> : null}

      {inView ? <ProjectMain
        initial={{ x: -100, opacity: 0}}
        animate={{ x: 0, opacity: 1}}
        transition={{
          duration: 0.8,
          delay: 0.2,
          easein: [0, 0.71, 0.2, 1.01]
        }}
      >
        <Image src='/images/bike.webp'/>
        <PreTitle>Bike Rental</PreTitle>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </ProjectMain> : null}
      
      {inView ? <ProjectMain
        initial={{ x: 100, opacity: 0}}
        animate={{ x: 0, opacity: 1}}
        transition={{
          duration: 0.8,
          delay: 0.2,
          easein: [0, 0.71, 0.2, 1.01]
        }}
      >
        <Image src='/images/bike.webp'/>
        <PreTitle>Bike Rental</PreTitle>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </ProjectMain> : null}

      {inView ? <ProjectMain
        initial={{ x: 100, opacity: 0}}
        animate={{ x: 0, opacity: 1}}
        transition={{
          duration: 0.8,
          delay: 0.2,
          easein: [0, 0.71, 0.2, 1.01]
        }}
      >
        <Image src='/images/bot.jpeg'/>
        <PreTitle>Robit</PreTitle>
        <Text>Lorem ipsum dolor sit amet.</Text>
      </ProjectMain>  : null}

      </Wrapper> 

    </ProjectContainer>
  )
}

export default Projects
