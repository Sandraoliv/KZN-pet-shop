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
    color: white;
    width: 100%;
    height: 50px;
    background-color: var(--color-secondary);
    box-shadow: none;

    font-family: "Tilt Neon";
  }
  .loginButton:hover {
    background-color: #f57c00;
    box-shadow: none;
    font-family: "Tilt Neon";
  }

  .redirectButton {
    background-color: var(--color-assistant);
    color: white;
    height: 50px;
    width: 100%;
    font-family: "Tilt Neon";
    box-shadow: none;
  }
  .redirectButton:hover {
    background-color: var(--color-assistant);
    opacity: 0.7;
    box-shadow: none;
    font-family: "Tilt Neon";
  }

  p {
    color: var(--color-secondary);
  }

  label {
    font-family: "Tilt Neon";
  }

  input {
    background-color: var(--grey-0);
    color: var(--color-secondary);

    font-family: "Tilt Neon";
  }
`;
