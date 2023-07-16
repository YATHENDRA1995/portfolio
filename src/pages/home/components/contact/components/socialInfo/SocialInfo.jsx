import SocialIconContainer from "../../../../../../shared/components/socialIconContainer/SocialIconContainer";
import {
  FlexColumn,
} from "../../../../../../shared/styles/sharedStyles";
import {
  Label,
  SocialHeading,
  SocialInfoContainer,
  Value,
} from "./SocialInfo.style";

const SocialInfo = () => {
  return (
    <SocialInfoContainer>
      <FlexColumn gap={"24px"} alignitems={"flex-start"}>
        <FlexColumn gap={"12px"} alignitems={"center"} width={"100%"}>
          <SocialHeading>I'M ALSO ON SOCIAL NETWORKS</SocialHeading>
          <SocialIconContainer />
        </FlexColumn>
        <FlexColumn alignitems={"flex-start"} padding={"16px"} gap={"24px"}>
          <FlexColumn gap={"8px"} alignitems={"flex-start"}>
            <Label>Address</Label>
            <Value>Nandyal, Andhra Pradesh, India</Value>
          </FlexColumn>
          <FlexColumn gap={"8px"} alignitems={"flex-start"}>
            <Label>Let's Talk</Label>
            <Value>+91 9742788996</Value>
          </FlexColumn>
          <FlexColumn gap={"8px"} alignitems={"flex-start"}>
            <Label>Email</Label>
            <Value>yathendra1995@gmail.com</Value>
          </FlexColumn>
        </FlexColumn>
      </FlexColumn>
    </SocialInfoContainer>
  );
};

export default SocialInfo;
