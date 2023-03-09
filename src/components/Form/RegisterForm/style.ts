import styled from "styled-components";

export const SectionFormRegister = styled.section`
  height: 100vh;
`;

export const MainFormRegister = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  height: 100%;

  padding: 0 20px;

  p {
    color: var(--color-secondary);
    width: 425px;
    height: 144px;
    font-weight: 400;
    font-size: 40px;
  }
  img {
    max-width: 100%;
    height: auto;
  }

  form {
    max-width: 616px;
    background-color: var(--color-tertiary-transparent);
  }
`;
