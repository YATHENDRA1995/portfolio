import { styled } from "styled-components"
import { screenSizes } from "../../styles/theme"

export const HeaderContainer = styled.div`
  padding: 16px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  position: fixed;
  width: 100%;
  z-index: 9;
  @media (min-width: ${screenSizes.sm}px) {
    padding: 16px 80px; 
  }
`
export const Brand = styled.h2`
  font-size: 30px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.primary}
  }
`
export const NavItems = styled.div`
  button {
    text-transform: uppercase;
  }
  @media (max-width: ${screenSizes.md}px) {
    display: none;
  }
`
export const NavMobileItems = styled.div`
  display: none;
  @media (max-width: ${screenSizes.md}px) {
    display: block;
  }
`
export const NavMobileItemList = styled.div`
  position: absolute;
  right: 8%;
  background: ${({ theme }) => theme.background};
  padding: 16px;
  border-radius: 10px;
  top: 72px;
`

export const NavItem = styled.p`
  cursor: pointer;
  padding-bottom: 4px;
  &:hover {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1px solid ${({ theme }) => theme.primary};
  }
`
