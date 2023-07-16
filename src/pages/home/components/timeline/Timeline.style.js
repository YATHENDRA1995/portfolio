import { styled } from "styled-components";
import { screenSizes } from "../../../../shared/styles/theme";

export const TimelineBoxContainer = styled.div`
  padding: 30px;
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 10px;
  text-align: left;
  line-height: 40px;
  cursor: pointer;
  &:hover {
    transition: 0.5s linear;
    transform: scale(1.05);
  }
  @media (min-width: ${screenSizes.lg}px) {
    min-width: 600px;
  }
`
export const Info = styled.p`
    font-size: 24px;
`