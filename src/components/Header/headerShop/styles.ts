import styled, { css } from "styled-components";

interface IMenu {
  menu: boolean;
  tokenProps: boolean;
}

export const StyledHeader = styled.header`
  ${({ tokenProps }: IMenu) => {
    if (tokenProps) {
      return css`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        padding: 10px 70px;
        justify-content: space-between;
        padding: 10px 70px;
        background-color: var(--color-assistant);
      `;
    } else {
      return css`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 10px 70px;
        justify-content: space-between;
        background-color: var(--color-tertiary-transparent);
      `;
    }
  }}

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

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo > img {
    height: 100%;
    width: 100%;
  }

  h2 {
    color: var(--color-secondary);

    font-size: 1.5rem;
  }

  .login {
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
    z-index: 10;
    width: 100%;
    height: 100%;

    color: white;
  }

  .login:hover {
    background-color: #f57c00;
    box-shadow: none;
  }

  .register {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: inherit;

    width: max-content;
    height: 35px;

    font-family: "Tilt Neon";

    border-radius: 10px;
  }

  .register:hover {
    background-color: inherit;
  }

  .registerLink {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    color: var(--color-secondary);
  }

  .registerLink:hover {
    color: #f57c00;
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

  @media (min-width: 550px) {
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
