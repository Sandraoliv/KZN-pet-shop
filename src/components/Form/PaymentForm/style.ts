import styled from "styled-components";

export const StyledFormPayment = styled.form`
  width: 90%;
  margin: 0 auto;
  background-color: #e8f6fd;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 20px;

  h3 {
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    margin-bottom: 50px;
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

  .select-container {
    display: flex;
    margin-top: 15px;
    margin-bottom: 25px;
    flex-direction: column;
    gap: 8px;
  }
  select {
    height: 50px;
    background-color: transparent;
    border: 0.6px solid #adaaaa;
    border-radius: 8px;
    padding: 0 8px;
    margin-bottom: 2rem;
  }

  .Text-Total {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 50px 0;
  }

  button {
    color: white;
    background-color: var(--color-secondary);
    box-shadow: none;

    font-family: "Tilt Neon";
  }

  button:hover {
    background-color: #f57c00;
    box-shadow: none;
  }

  @media (min-width: 800px) {
    width: 779px;

    .button-container {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    button {
      width: 445px;
      margin: 50px 0;
    }
  }
`;
