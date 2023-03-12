import styled from "styled-components";

export const UsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 150px;

  height: 60px;

  background-color: var(--color-assistant);

  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
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

  svg {
    color: var(--color-secondary);
    width: 30px;
    height: 20px;
  }
`;
