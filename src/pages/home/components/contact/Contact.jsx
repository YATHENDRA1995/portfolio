import { Container, Heading, TwoColumns } from "../../../../shared/styles/sharedStyles"
import SocialInfo from "./components/socialInfo/SocialInfo"
import ContactForm from "./components/contactForm/ContactForm"

const Contact = () => {
  return (
    <Container id='contact'>
      <Heading><span>CONTACT</span></Heading>
      <TwoColumns>
        <SocialInfo />
        <ContactForm />
      </TwoColumns>
    </Container>
  )
}

export default Contact