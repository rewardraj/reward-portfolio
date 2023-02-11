import React from 'react'
import Button from '../../Atoms/Button/Button';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { motion } from 'framer-motion';


import { 
ServicesContainer,
TextWrapper,
HeadingWrapper,
TextH2,
TextH3,
ServicesHandler,
ServicesWrapper,
Container,
Wrapper,
NameWrapper,
LinkWrapper, 
DescWrapper
} from './ServiceElements';




const servicesData = [
    {
        name: "Development",
        description: "Lorem ipsum dolor sit amet. Qui corrupti fugit rem dolores alias nam tenetur esse est esse quibusdam. Sit ipsa temporibus a quisquam illo et voluptatem alias. Qui possimus sint ut voluptates sint At velit dolore rem omnis reiciendis.",
        link: "",
    },

    {
        name: "Web Design",
        description: "Lorem ipsum dolor sit amet. Qui corrupti fugit rem dolores alias nam tenetur esse est esse quibusdam. Sit ipsa temporibus a quisquam illo et voluptatem alias. Qui possimus sint ut voluptates sint At velit dolore rem omnis reiciendis.",
        link: "",
    },

    {
        name: "System Architecture",
        description: "Lorem ipsum dolor sit amet. Qui corrupti fugit rem dolores alias nam tenetur esse est esse quibusdam. Sit ipsa temporibus a quisquam illo et voluptatem alias. Qui possimus sint ut voluptates sint At velit dolore rem omnis reiciendis.",
        link: "",
    }
];

const animateItem = {
    hidden: {opacity: 0},
    show: {opacity: 1}
}

const Services = () => {
  return (
 
        <ServicesContainer>

       
            <TextWrapper as={motion.div}
             initial={{ x: -100, opacity: 1}}
             animate={{ x: 0, opacity: 1}}
             transition={{
               duration: 0.8,
               delay: 0.2,
               easein: [0, 0.71, 1.01]
             }}
            > 
                <HeadingWrapper>
                    <TextH2>What I Do</TextH2>
                    <TextH3>I'm a Freelance Front-end Dev with 2 years of experience</TextH3>
                </HeadingWrapper>
                <Button text={"See more"} size="1rem"/>
            </TextWrapper>
            
            <ServicesWrapper>
                <ServicesHandler>
                    {servicesData.map((service, index) => {

                        // destructure servicesData
                        const {name, description, link} = service;
                        return <Container key={index}
                            
                        > 
                            <Wrapper>
                                <NameWrapper variants={animateItem}>{name}</NameWrapper>
                                <DescWrapper variants={animateItem}>{description}</DescWrapper>
                            </Wrapper>
                            <LinkWrapper>
                                <BsArrowUpRightCircleFill />
                                {link}
                            </LinkWrapper>
                        </Container>
                    })}
                </ServicesHandler>
            </ServicesWrapper> 
        </ServicesContainer> 
    // </section>
  )
}

export default Services
