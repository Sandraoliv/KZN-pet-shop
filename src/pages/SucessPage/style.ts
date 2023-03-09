import styled from "styled-components";

export const StyledSucessPage = styled.div`
  width: 100vw;
  height: 100vh;

  .container-mensage {
    width: 100%;
    margin-top: 40px;
  }
  .container-mensage p {
    width: 70%;
    text-align: center;
    background-color: var(--color-tertiary-transparent);
    margin: 0 auto;
    padding: 8px;
    border-radius: 10px;
  }

  .container-image img {
    width: 90%;
    margin: 30px 0;
  }

  .container-button {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  button {
    width: 80%;
    height: 35px;
    border-radius: 10px;
    background-color: var(--color-secundary);
    color: #fff;
    transition: all 0.4s;
  }

  button:hover {
    background-color: var(--color-secundary-hover);
  }

  @media (min-width: 800px) {
    .content-flex-desktop {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }
    .container-button {
      display: flex;
      justify-content: flex-end;
      padding-right: 100px;
    }
    .container-image {
      padding-left: 100px;
    }

    button {
      width: 250px;
      background-color: var(--color-tertiary);
    }
    button:hover {
      background-color: var(--color-tertiary);
      width: 260px;
      height: 45px;
    }
  }
`;
