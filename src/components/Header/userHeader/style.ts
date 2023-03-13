import styled, { css } from "styled-components";

interface IMenu {
  menu: boolean;
}
export const UsHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;

  background-color: var(--color-assistant);

  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);

  ${({ menu }: IMenu) => {
    if (menu) {
      return css`
        .navDown {
          margin-top: 10px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          gap: 10px;
          width: 100%;
        }
      `;
    } else {
      return css`
        .navDown {
          display: none;
        }
      `;
    }
  }}

  .nav {
    display: none;
  }

  .navUp {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
  }

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

  .shop {
    color: white;
    background-color: var(--color-secondary);
    box-shadow: none;

    font-family: "Tilt Neon";
  }

  .shop:hover {
    background-color: #f57c00;
    box-shadow: none;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    color: white;
  }

  .icon {
    color: var(--color-secondary);
  }

  .icon:hover {
    color: #f57c00;
  }

  .menuIcon {
    color: var(--color-secondary);

    width: 30px;
    height: 30px;
  }

  .menuIcon:hover {
    color: #f57c00;
  }

  @media (min-width: 400px) {
    .nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }

    .menuIcon {
      display: none;
    }

    .navDown {
      display: none;
    }
  }
`;
