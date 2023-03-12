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

  .shop {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-secondary);
    box-shadow: none;

    padding: 0;

    width: max-content;
    height: 35px;

    font-family: "Tilt Neon";

    border-radius: 10px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    color: white;
  }

  .shop:hover {
    background-color: #f57c00;
    box-shadow: none;
  }
`;
