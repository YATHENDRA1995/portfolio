import {
  Container,
  FlexColumn,
  FlexRow,
  Heading,
  Icon,
} from "../../../../shared/styles/sharedStyles";
import { SkillHeading } from "./Skills.style";
import { skillsInfo } from "./data";

const Skills = () => {
  return (
    <Container id="skills">
      <Heading>
        <span>SKILLS</span>
      </Heading>

      {skillsInfo?.map((skillType) => (
        <SkillIcon
          key={crypto.randomUUID()}
          heading={skillType?.heading}
          icons={skillType?.icons}
        />
      ))}
    </Container>
  );
};

export default Skills;

const SkillIcon = ({ heading, icons }) => (
  <FlexColumn
    alignitems={"flex-start"}
    gap={"8px"}
    width={"100%"}
    margin={"24px 0px"}
  >
    <SkillHeading>{heading}</SkillHeading>
    <FlexRow gap={"16px"} justifycontent={'flex-start'} flexwrap={'wrap'}>
      {icons.map((RiIcon) => (
        <Icon key={crypto.randomUUID()}>
          <RiIcon size={25} />
        </Icon>
      ))}
    </FlexRow>
  </FlexColumn>
);
