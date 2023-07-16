import React from "react";
import {
  Container,
  FlexColumn,
  FlexRow,
  Heading,
} from "../../../../shared/styles/sharedStyles";
import CustomButton from "../../../../shared/components/customButton/CustomButton";
import { CardContainer, CardImg } from "./Projects.style";
import SMUDE from "../../../../assets/images/smude.png";

const Projects = () => {
  return (
    <Container id='projects'>
      <Heading>
        <span>PROJECTS</span>
      </Heading>
      <FlexRow justifycontent={"flex-start"}>
        <ProjectCard />
      </FlexRow>
    </Container>
  );
};

export default Projects;

const ProjectCard = () => {
  return (
    <CardContainer>
      <FlexColumn gap={'16px'} width={'100%'}>
        <CardImg src={SMUDE} alt="" />
        <FlexRow justifycontent={'flex-start'} width={'100%'}>
          <CustomButton>Project Link</CustomButton>
        </FlexRow>
      </FlexColumn>
    </CardContainer>
  );
};
