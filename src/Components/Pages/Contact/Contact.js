import React from 'react'
import {
  Container,
  TextWrapper,
  TextH4,
  TextH2,
  FormHeading,
  Form,
  Input,
  Textarea

} from './ContactElements'
import Button from '../../Atoms/Button/Button'

const Contact = () => {
  return (
    <>
    <Container>
      {/* TextWrapper */}
      <TextWrapper>
        <FormHeading>
        <TextH4>Get in touch</TextH4>
        <TextH2>I'm a message <br /> away!</TextH2>
        
        </FormHeading>
      </TextWrapper>

      {/* form section */}
      <Form>
    
        <Input type="text" name="email" placeholder="Your Email" />
        <Input type="text" name="name" placeholder="Your Name" />
        <Textarea type="text" placeholder="Your Message"></Textarea>
        <Button text={"Send Message"} size={"0.9rem"}/>
      </Form>
      
    </Container>
    </>
  )
}

export default Contact
