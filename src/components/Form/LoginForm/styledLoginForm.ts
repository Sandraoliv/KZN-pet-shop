import styled from "styled-components";

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 42px;
  height: 90%;
  width: 100%;

  .formButtons {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 42px;
  }

  .loginButton {
    background-color: var(--color-secondary);
    color: var(--color-primary);
    width: 100%;
    height: 50px;
    font-size: 1.87rem;
    border-radius: 8px;
  }
  .loginButton:hover {
    background: var(--color-secundary-hover);
  }

  .redirectButton {
    background-color: var(--color-assistant);
    color: var(--color-primary);
    height: 50px;
    width: 100%;
    font-size: 1.87rem;
    border-radius: 8px;
  }
  .redirectButton:hover {
    background-color: var(--color-assistant);
    opacity: 0.7;
  }
`;
