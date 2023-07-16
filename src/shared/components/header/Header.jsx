import { useState } from "react";
import { resumeLink } from "../../../config/Config";
import { FlexColumn, FlexRow } from "../../styles/sharedStyles";
import CustomButton from "../customButton/CustomButton";
import {
  Brand,
  HeaderContainer,
  NavItem,
  NavItems,
  NavMobileItemList,
  NavMobileItems,
} from "./Header.style";
import { navItems } from "./data";
import { RxHamburgerMenu } from "react-icons/Rx";
import { scrollToComp } from "../../utilities/helpers";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Downloading Resume
  const downloadResume = () => {
    window.open(resumeLink, "_blank");
  };

  return (
    <HeaderContainer>
      <FlexRow
        width={"100%"}
        justifycontent={"space-between"}
        flexwrap={"wrap"}
      >
        <Brand onClick={() => scrollToComp('banner')}>NY</Brand>

        {/* NavItems for Desktop */}
        <NavItems>
          <FlexRow
            columngap={"32px"}
            flexwrap={"wrap"}
            justifycontent={"flex-start"}
          >
            {navItems?.map((item) => (
              <NavItem
                key={crypto.randomUUID()}
                onClick={() => scrollToComp(item?.key)}
              >
                {item?.label}
              </NavItem>
            ))}
            <CustomButton onClick={() => downloadResume()}>
              Download Resume
            </CustomButton>
          </FlexRow>
        </NavItems>

        {/* NavItems for Mobile */}
        <NavMobileItems>
          <RxHamburgerMenu
            size={30}
            onClick={() => setIsMobileNavOpen((prev) => !prev)}
          />
          {isMobileNavOpen ? (
            <NavMobileItemList>
              <FlexColumn
                alignitems={'flex-end'}
                gap={'16px'}
              >
                {navItems?.map((item) => (
                  <NavItem
                    key={crypto.randomUUID()}
                    onClick={() => scrollToComp(item?.key)}
                  >
                    {item?.label}
                  </NavItem>
                ))}
                <CustomButton onClick={() => downloadResume()}>
                  Download Resume
                </CustomButton>
              </FlexColumn>
            </NavMobileItemList>
          ) : null}
        </NavMobileItems>
      </FlexRow>
    </HeaderContainer>
  );
};

export default Header;
