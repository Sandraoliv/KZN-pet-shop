import styled, { css } from "styled-components";
import { IUser } from "../../../provider/UserContext/@Types";

interface IUserProps {
  user: IUser;
}

export const StyledProductCard = styled.li`
  ${({ user }: IUserProps) => {
    if (user) {
      return css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: relative;
        gap: 10px;
        padding: 10px;
        border-radius: 10px;
        min-width: 200px;
        max-width: 200px;
        min-height: 280px;
        margin-top: 15px;
      `;
    } else {
      return css`
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        gap: 10px;
        padding: 10px;
        border-radius: 10px;
        min-width: 200px;
        max-width: 200px;
        min-height: 280px;
        margin-top: 15px;
      `;
    }
  }}

  .img__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    height: 100px;
    width: 100px;
  }

  h3 {
    font-weight: 100;
  }

  .card__hover {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    padding: 10px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    display: none;
  }

  .img__container > img {
    width: 70%;
    height: 70%;
    border-radius: 10px;
  }

  .img__container:hover {
    .card__hover {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 180px;
      height: 120px;
      right: 0;
      top: 0px;
      padding: 10px;
      background: rgba(51, 51, 51, 0.1);
      border-radius: 10px;
    }

    .card__hover > button {
      padding: 8px;
      color: white;
      border-radius: 10px;
      background-color: var(--color-secondary);
    }
  }

  h3 {
    width: 100%;
    text-align: center;
  }

  .prices__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .prices__container > button {
    padding: 8px 16px;
    color: white;
    position: absolute;
    width: 90%;
    bottom: 20px;
    border-radius: 10px;
    background-color: var(--color-secondary);
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  .editar {
    width: 100%;
    background-color: var(--color-secondary);
    border-radius: 10px;
    padding: 5px 0;
    color: var(--color-tertiary-transparent);
  }

  .deletar {
    width: 100%;
    background-color: var(--negative);
    border-radius: 10px;
    padding: 5px 0;
    color: var(--color-tertiary-transparent);
  }
`;
