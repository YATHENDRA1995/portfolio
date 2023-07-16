import { FlexColumn, FlexRow } from "../../styles/sharedStyles";
import SocialIconContainer from "../socialIconContainer/SocialIconContainer";
import { CopyrightText, FooterContainer } from "./Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <FlexColumn>
      <SocialIconContainer />
        <FlexRow>
          <CopyrightText>
            &copy; Copyright 2023 Yathendra - All Rights Received
          </CopyrightText>
        </FlexRow>
      </FlexColumn>
    </FooterContainer>
  );
};

export default Footer;
