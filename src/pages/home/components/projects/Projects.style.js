import { styled } from "styled-components";

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.background};
  padding: 16px;
  border-radius: 10px;
`

export const CardImg = styled.img`
  width: 300px;
  height: 300px;
`