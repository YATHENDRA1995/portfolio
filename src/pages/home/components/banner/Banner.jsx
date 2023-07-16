import Lottie from "react-lottie";
import CustomButton from "../../../../shared/components/customButton/CustomButton";
import { Container, TwoColumns } from "../../../../shared/styles/sharedStyles";
import {
  Description,
  LeftContainer,
  RightContainer,
  SubTitle,
  Title,
} from "./Banner.style";
import { description, subTitle, title } from "./data";
import BannerImg from "../../../../assets/json/frontEndBanner.json";
import { lottieDefaultOptions } from "../../../../config/Config";
import { Fragment } from "react";
import { scrollToComp } from "../../../../shared/utilities/helpers";

const Banner = () => {
  const lottieBanner = JSON.parse(JSON.stringify(lottieDefaultOptions));
  lottieBanner.animationData = BannerImg;

  return (
    <Container id='banner'>
      <TwoColumns>
        <LeftContainer>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
          <Description>
            <ul>
              {description.map((item) => (
                <Fragment key={crypto.randomUUID()}>
                  <li>{item}</li>
                  <br />
                </Fragment>
              ))}
            </ul>
          </Description>
          <CustomButton onClick={() => scrollToComp('contact')}>Hire Me!</CustomButton>
        </LeftContainer>
        <RightContainer>
          <Lottie options={lottieBanner} />
        </RightContainer>
      </TwoColumns>
    </Container>
  );
};

export default Banner;
