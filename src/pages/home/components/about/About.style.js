import { styled } from "styled-components"
import { screenSizes } from "../../../../shared/styles/theme"

export const AboutContainer = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: ${screenSizes.lg}px) {
    grid-template-columns: 1fr 1.5fr;
  }
`

export const ProfileImg = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 100%;
    border: 6px solid ${({ theme }) => theme.primary};
    max-width: 400px;
    max-height: 400px;
  }
`

export const ProfileContent = styled.div`
  background: ${({ theme }) => theme.background};
  padding: 32px;
  text-align: center;
  border-radius: 10%;
  max-width: 100%;
`
export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0px 0px 24px;
`
export const SubTitle = styled.h6`
  font-size: 30px;
  color: ${({ theme}) => theme.primary};
  margin: 0px 0px 24px;
`
export const Description = styled.div`
  li {
    padding-bottom: 12px;
  }
  margin: 0px 0px 24px;
  font-size: 20px;
  padding-left: 24px;
  text-align: left;
`