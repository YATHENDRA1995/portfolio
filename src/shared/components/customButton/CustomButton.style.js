import { styled } from "styled-components";

export const CustomBtn = styled.button`
  padding: 12px 24px;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};

  &:hover {
    transform: scale(1.05);
  }
  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`