import { FlexRow, Icon } from "../../styles/sharedStyles";
import { openNewLink } from "../../utilities/helpers";
import { socialIcons } from "./data";

const SocialIconContainer = () => {
  return (
    <FlexRow gap={"24px"}>
      {socialIcons.map((IconComponent) => (
        <Icon key={crypto.randomUUID()} onClick={() => openNewLink(IconComponent.link)}>
          <IconComponent.icon size={20} />
        </Icon>
      ))}
    </FlexRow>
  )
};

export default SocialIconContainer;

