import styled from "styled-components";
import patinahas from "../../assets/patinhas.svg";
import patinahasUser from "../../assets/backgroungBannerUser.svg";

export const StyledShop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 100vw;

  z-index: 1;
  overflow: hidden;

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
    background-color: var(--color-secundary-hover);
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
  }

  .category {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    overflow: auto;
  }

  .category > div {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  main h2 {
    color: var(--color-secundary);
    font-weight: 100;
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

  @media (min-width: 1200px) {
    .category {
      align-items: center;
    }
  }

  @media (min-width: 1500px) {
    .img__container--desktop {
      bottom: -96px;
      right: 10px;
    }

    .img__container--desktop > img {
      width: 900px;
      height: 500px;
    }
  }
`;
