import styled from "styled-components";

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 42px;
  height: 90%;
  width: 100%;

  .formButtons {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 42px;
    width: 100%;
  }

  .loginButton {
    background-color: #ff9b00;
    color: #fff2ea;
    width: 90%;
    height: 50px;
    font-size: 1.87rem;
    border-radius: 8px;
  }
  .loginButton:hover {
    background: #ff9b00;
    opacity: 0.7;
  }

  .redirectButton {
    background-color: #168821;
    color: #fff2ea;
    height: 50px;
    width: 90%;
    font-size: 1.87rem;
    border-radius: 8px;
  }
  .redirectButton:hover {
    background-color: #adce53;
    opacity: 0.7;
  }
`;
