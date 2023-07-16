import { styled } from "styled-components"
import { colors, screenSizes } from "./theme";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifycontent }) => justifycontent? justifycontent: 'center'};
  align-items: ${({ alignitems }) => alignitems? alignitems: 'center'};
  row-gap: ${({ rowgap }) =>  rowgap? rowgap: ''};
  column-gap: ${({ columngap }) =>  columngap? columngap: ''};
  gap: ${({ gap }) =>  gap? gap: ''};
  flex-wrap: ${({ flexwrap }) => flexwrap? flexwrap: ''};
  width: ${({ width }) => width? width: ''};
  height: ${({ height }) => height? height: ''};
  padding: ${({ padding }) => padding? padding: ''};
`
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifycontent }) => justifycontent? justifycontent: 'center'};
  align-items: ${({ alignitems }) => alignitems? alignitems: 'center'};
  row-gap: ${({ rowgap }) =>  rowgap? rowgap: ''};
  column-gap: ${({ columngap }) =>  columngap? columngap: ''};
  gap: ${({ gap }) =>  gap? gap: ''};
  flex-wrap: ${({ flexwrap }) => flexwrap? flexwrap: ''};
  width: ${({ width }) => width? width: ''};
  height: ${({ height }) => height? height: ''};
  padding: ${({ padding }) => padding? padding: ''};
  margin: ${({ margin }) => margin? margin: ''};
`
export const TwoColumns = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(1, 1fr);
  padding: ${({ padding }) => padding? padding: ""};
  @media (min-width: ${screenSizes.lg}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Container = styled.div`
  color: ${({ theme }) => theme.text};
  padding: 16px 32px;
  @media (min-width: ${screenSizes.sm}px) {
    padding: 16px 80px; 
  }
`
export const Heading = styled.h1`
  display: flex;
  justify-content: center;
  margin: 8px 0px 48px;
  font-size: 36px;
  span {
    border-bottom: 3px solid ${({ theme }) => theme.primary};
  }
`
export const Icon = styled(FlexRow)`
  height: 35px;
  width: 35px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 100%;
  cursor: pointer;
  transition: 0.3s linear;
  color: ${colors.white};
  &:hover {
    background: ${colors.white};
    color: ${colors.black};
  }
`