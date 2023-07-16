import { styled } from "styled-components";

export const FooterContainer = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 16px 0px;
`
export const CopyrightText = styled.p`
  margin: 8px 0px;
  text-align: center;
`