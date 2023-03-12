import styled from "styled-components";

export const SectionFormRegister = styled.section`
  height: 100vh;
`;

export const MainFormRegister = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;

  width: 100vw;
  height: 100%;

  padding: 0 20px;

  section {
    display: flex;
    align-items: center;
  }

  section > div {
    width: 19px;
    height: 41px;

    background: var(--color-secondary);
  }

  h3 {
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    text-align: center;

    color: var(--color-secondary);
  }

  img {
    display: none;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    padding: 40px;

    width: 500px;
    height: max-content;

    background-color: var(--color-tertiary-transparent);

    .titleForm {
      display: flex;
      gap: 5px;
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
  }

  @media (min-width: 620px) {
    img {
      display: block;

      max-width: 40%;
      height: auto;
    }
  }
`;
