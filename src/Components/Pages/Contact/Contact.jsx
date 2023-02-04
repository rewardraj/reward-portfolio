import React from 'react'
import {
  Container,
  TextWrapper,
  TextH4,
  TextH2,
  FormHeading,
  Form,
  Input

} from './ContactElements'

const Contact = () => {
  return (
    <>
    <Container>
      {/* TextWrapper */}
      <TextWrapper>
        <FormHeading>
        <TextH4>Get in touch</TextH4>
        <TextH2>Let's work <br /> together!</TextH2>
        </FormHeading>
      </TextWrapper>

      {/* form section */}
      <Form>
    
        <Input type="text" name="email" placeholder="Your Email" />
        <Input type="text" name="name" placeholder="Your Name" />
        <Input type="text" name="message" placeholder="Your Message" />
      </Form>
    </Container>
    </>
  )
}

export default Contact
