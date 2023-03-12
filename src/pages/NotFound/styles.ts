import styled from "styled-components";

export const StyledNotFoundPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 100%;
  background-color: var(--color-tertiary-transparent);

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 2rem;
    text-align: center;
  }

  .link {
    text-decoration: none;
    text-align: center;
    padding: 16px 0;
    border-radius: 5px;
    width: 80%;
    color: white;
    background-color: var(--color-secondary);
    cursor: pointer;
  }

  .link:hover {
    background-color: var(--color-secundary-hover);
  }
`;
