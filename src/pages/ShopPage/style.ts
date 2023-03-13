import styled, { css } from "styled-components";
import patinahas from "../../assets/patinhas.svg";
import patinahasUser from "../../assets/backgroungBannerUser.svg";

interface ITokenState {
  token: boolean;
}

export const StyledShop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 100vw;
  z-index: 1;
  overflow: hidden;

  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    width: 100%;
  }

  .loading > p {
    border-radius: 10px;
    background-color: var(--color-assistant);
    padding: 20px 0;
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 200px;
    z-index: 11;
    border-radius: 20px;
    gap: 10px;
    width: 50%;
    max-width: 500px;
    padding: 32px;
    background-color: white;
  }

  h2 {
    font-weight: 100;
    color: var(--color-secondary);
  }

  form > .modalHeader {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  form > div {
    width: 100%;
  }

  form > div > span {
    cursor: pointer;
  }

  form > input {
    width: 100%;
  }

  form > button {
    width: 100%;
    background-color: var(--color-secondary);
    color: white;
  }

  form > button:hover {
    background-color: var(--color-secondary-hover);
  }

  ${({ token }: ITokenState) => {
    if (token) {
      return css`
        .banner {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          background-image: url(${patinahasUser});
          background-size: cover;
          padding: 16px 5vw;
          padding-bottom: 150px;
          position: relative;
        }
      `;
    } else {
      return css`
        .banner {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          background-image: url(${patinahas});
          background-size: cover;
          padding: 16px 5vw;
          padding-bottom: 150px;
          position: relative;
        }
      `;
    }
  }}

  .blueBall {
    position: absolute;
    width: 900px;
    height: 900px;
    border-radius: 50%;
    background-color: var(--color-tertiary);
    bottom: -400px;
    left: -400px;
    z-index: -10;
  }

  .orangeBall {
    position: absolute;
    width: 900px;
    height: 900px;
    border-radius: 50%;
    background-color: var(--color-secondary-hover);
    bottom: 500px;
    right: -500px;
    z-index: -10;
  }

  .greenBall {
    position: absolute;
    width: 900px;
    height: 900px;
    border-radius: 50%;
    background-color: var(--color-assistant);
    top: 200px;
    left: -700px;
    z-index: -10;
  }

  .input {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .input > input {
    padding: 10px;
    width: 100%;
    border-radius: 15px;
  }

  .paragraph {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 0;
  }

  .paragraph > p {
    text-align: left;
    font-size: 2rem;
    color: var(--color-tertiary);
    margin-bottom: 10px;
  }

  .paragraph > span {
    text-align: left;
    color: var(--grey-300);
  }

  .buttonArrow {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    background-color: var(--color-secondary);
    padding: 10px;
    margin-top: 10px;
    border-radius: 30px;
    margin-bottom: 10px;
    cursor: pointer;
    z-index: 4;
  }

  .buttonArrow > p {
    text-align: center;
    color: var(--grey-100);
  }

  .buttonArrow > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-tertiary);
    border-radius: 20px;
    padding: 5px 10px;
  }

  .buttonArrow > div > svg {
    color: white;
    width: 70%;
    height: 70%;
  }

  .img__container--mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 100%;
    bottom: -77px;
    right: 0px;
    z-index: 2;
  }

  .img__container--desktop {
    display: none;
  }

  .img__container--mobile > img {
    width: 320px;
    height: 225px;
  }

  .tags {
    display: none;
    color: var(--color-secondary);
  }

  .ShopTittle {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
  }

  .category {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: auto;
    min-width: 200px;
    width: 100%;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 95%;
    gap: 20px;
    height: 100%;
    padding: 10vw;
    padding-top: 150px;
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-radius: 20px;
    padding: 16px;

    background-color: var(--color-tertiary-transparent);
  }

  footer > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 16px;
    gap: 15px;
  }

  .companyes > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
  }

  .companyes > div > div {
    border-radius: 10px;
  }

  .companyes p {
    font-size: 1.5rem;
  }

  footer img {
    max-width: 150px;
    max-height: 150px;
    border-radius: 10px;
  }

  footer > p {
    width: 100%;
    text-align: center;
    color: var(--color-assistant);
    margin-bottom: 20px;
  }

  footer > span {
    width: 100%;
    font-size: 0.5rem;
    text-align: center;
    color: var(--grey-300);
  }

  footer > section {
    width: 100%;
    max-width: 1000px;
    padding: 16px 16px;
    color: white;
    margin-top: 10px;
    text-align: center;
    border-radius: 15px;
    background-color: var(--color-tertiary);
  }

  .AdminFunction {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: var(--color-secondary);
    width: 100%;
  }

  @media (min-width: 600px) {
    .img__container--mobile {
      display: none;
    }

    .tags {
      position: absolute;
      display: flex;
      flex-direction: column;
      padding-left: 5vw;
      gap: 10px;
      align-items: center;
      width: 30%;
      height: 100px;
      bottom: -110px;
    }
    .tags > span {
      text-align: center;
      color: var(--color-secundary);
    }

    .banner {
      align-items: flex-start;
    }

    .paragraph {
      display: flex;
      flex-direction: column;

      padding: 16px 0;
      width: 50%;
    }

    .img__container--desktop {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      position: absolute;
      bottom: -50px;
      right: 10px;
      /* right: 5vw; */
      z-index: 2;
      width: 100%;
    }

    .img__container--desktop > img {
      width: 600px;
      height: 300px;
    }
  }

  @media (min-width: 750px) {
    .tags {
      flex-direction: row;
      padding-left: 0;
      width: 45%;
    }
  }

  @media (min-width: 900px) {
    .tags {
      flex-direction: row;
      padding-left: 10vw;

      width: 45%;
    }
    .img__container--desktop {
      right: 5vw;
    }
  }

  @media (max-width: 1200px) {
    .category {
      width: 100%;
    }
  }

  @media (min-width: 1500px) {
    .img__container--desktop {
      bottom: -65px;
      right: 10px;
    }

    .img__container--desktop > img {
      width: 800px;
      height: 400px;
    }
  }
`;
