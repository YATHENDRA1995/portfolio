import {
  AboutContainer,
  Description,
  ProfileContent,
  ProfileImg,
  SubTitle,
  Title,
} from "./About.style";
import { profileText, subTitle, title } from "./data";
import ProfilePic from "../../../../assets/images/yathi.jpg";
import {
  Container,
  FlexRow,
  Heading,
} from "../../../../shared/styles/sharedStyles";

const About = () => {
  return (
    <Container id="about">
      <Heading>
        <span>ABOUT</span>
      </Heading>
      <AboutContainer>
        <ProfileImg>
          <FlexRow height={'100%'}>
            <img src={ProfilePic} alt="" />
          </FlexRow>
        </ProfileImg>
        <ProfileContent>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
          <Description>
            <ul>
              {profileText.map((item) => (
                <li key={crypto.randomUUID()}>{item}</li>
              ))}
            </ul>
          </Description>
        </ProfileContent>
      </AboutContainer>
    </Container>
  );
};

export default About;
