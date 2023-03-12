import styled, { css } from "styled-components";

interface Imenu {
  menu: boolean;
}

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  justify-content: space-between;
  background-color: var(--color-assistant);

  .navUp {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
  }

  .navDown {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
  }

  .nav {
    display: none;
  }

  .nav > svg {
    color: var(--color-secondary);
  }

  ${({ menu }: Imenu) => {
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

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo > img {
    height: 100%;
    width: 100%;
  }

  .login {
    text-decoration: none;
    text-align: center;
    padding: 5px 16px;
    border-radius: 5px;
    background-color: var(--color-secondary);
    color: white;
    z-index: 10;
  }

  .login:hover {
    background-color: var(--color-secondary-hover);
  }

  .register {
    text-decoration: none;
    text-align: center;
    padding: 5px 16px;
    border-radius: 5px;
    color: var(--color-secondary);
  }

  & > div > svg {
    color: var(--color-secondary);
  }

  @media (min-width: 500px) {
    /* verer */

    .nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }

    .navMenu {
      display: none;
    }

    .navDown {
      display: none;
    }
  }
`;
