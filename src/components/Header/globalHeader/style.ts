import styled from "styled-components";

export const GblHeader = styled.header`
  display: flex;
  align-items: center;

  padding: 0 100px;

  height: 70px;

  background-color: var(--color-tertiary-transparent);

  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
  }

  a {
    width: max-content;
    height: 52px;

    padding: 5px 30px;

    background: var(--color-secondary);
    border-radius: 10px;

    color: #ffffff;
  }

  a:hover {
    background-color: #f57c00;
  }
`;
