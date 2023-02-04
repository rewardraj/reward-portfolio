import React from 'react'
import Button from '../../Atoms/Button/Button';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';


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
import { useInView } from 'react-intersection-observer';



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

// Custom animation settings
const animateContainer = {
    hidden: {opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            easeIn: [0, 0.17, 0.2, 1.01],
            duration: 0.8,
            delayChildren: 0.2,
            staggerChildren: 0.6,
        }
    }
}

const animateItem = {
    hidden: {opacity: 0},
    show: {opacity: 1}
}

const Services = () => {

    const [ref, inView] = useInView({
        threshold: 0.1 ,
    });

  return (
    // <section className='section' id='services'> 
        <ServicesContainer ref={ref}>

        {inView ? 
            <TextWrapper
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
                <Button text={"See my work"} size="1.2rem"/>
            </TextWrapper> : null }
            
            <ServicesWrapper> {inView ? 
                <ServicesHandler>
                    {servicesData.map((service, index) => {
                        // destructure servicesData
                        const {name, description, link} = service;
                        return <Container key={index}
                            variants={animateContainer}
                            initial="hidden"
                            animate="show"
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
                </ServicesHandler>  :null }
            </ServicesWrapper> 
        </ServicesContainer> 
    // </section>
  )
}

export default Services
