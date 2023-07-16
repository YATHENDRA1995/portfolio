import {
  Container,
  FlexColumn,
  Heading,
} from "../../../../shared/styles/sharedStyles";
import { Info, TimelineBoxContainer } from "./Timeline.style";
import { timeLineInfo } from "./data";

const Timeline = () => {
  return (
    <Container id='timeline'>
      <Heading>
        <span>TIMELINE</span>
      </Heading>
      <FlexColumn gap={'24px'}>
        {timeLineInfo?.map((item) => (
          <TimelineBox key={crypto.randomUUID()} {...item} />
        ))}
      </FlexColumn>
    </Container>
  );
};

export default Timeline;

const TimelineBox = ({ companyName, role, location, year }) => {
  return (
    <TimelineBoxContainer>
      <FlexColumn gap={"8px"} alignitems={"flex-start"}>
        <Info><b>Role: {role}</b></Info>
        <Info>Company Name: {companyName}</Info>
        <Info>Location: {location}</Info>
        <Info>Year: {year}</Info>
      </FlexColumn>
    </TimelineBoxContainer>
  );
};
