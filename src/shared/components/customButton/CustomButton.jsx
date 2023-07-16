import { CustomBtn } from "./CustomButton.style";

const CustomButton = (props) => {
  const { children } = props;

  return <CustomBtn {...props}>{children}</CustomBtn>;
};

export default CustomButton;
