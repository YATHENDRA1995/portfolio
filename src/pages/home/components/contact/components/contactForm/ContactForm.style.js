import { styled } from "styled-components";
import { colors } from "../../../../../../shared/styles/theme";

export const ContactFormContainer = styled.div`
  background: ${colors.black};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 10px;
  padding: 32px 40px;
  color: ${({ theme }) => theme.text};

  form {
    width: 100%;
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: none;
    outline: none;
    color: ${colors.white};
    font-size: 16px;
    background-color: ${({ theme }) => theme.background};
    padding: 0 24px;
    box-sizing: border-box;
  }

  textarea {
    width: 100%;
    height: 100px;
    border-radius: 10px;
    border: none;
    outline: none;
    color: ${colors.white};
    font-size: 16px;
    background-color: ${({ theme }) => theme.background};
    padding: 8px 24px;
    box-sizing: border-box;
  }

  label {
    span {
      color: ${colors.red};
    }
  }
`
export const ContactTitle = styled.h6`
  font-size: 30px;
`
export const Error = styled.p`
  color: ${colors.red};
`