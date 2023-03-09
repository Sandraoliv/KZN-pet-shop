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

    color: var(--color-secondary);
  }

  img {
    max-width: 40%;
    height: auto;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    padding: 40px;

    width: 500px;
    height: max-content;

    background-color: var(--color-tertiary-transparent);
  }
`;
