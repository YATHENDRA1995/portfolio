import { styled } from "styled-components";

export const SocialInfoContainer = styled.div`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 10px;
  padding: 32px 16px;
  color: ${({ theme }) => theme.text};
`

export const SocialHeading = styled.h2`
  font-size: 30px;
  text-align: center;
`
export const Label = styled.h6`
  font-size: 24px;
  font-weight: bold;
`

export const Value = styled.p`
  font-size: 20px;
`