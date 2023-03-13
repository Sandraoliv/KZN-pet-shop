import styled from "styled-components";

export const StyledSucessPage = styled.div`
  width: 100vw;
  height: 100vh;
  .content-flex-desktop {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .container-mensage {
    margin-top: 40px;
    width: 80%;
  }
  .container-mensage p {
    width: 100%;
    text-align: center;
    background-color: var(--color-tertiary-transparent);
    margin: 0 auto;
    padding: 8px;
    border-radius: 10px;
  }
  .container-image {
    width: 50%;
    display: flex;
    justify-content: center;
  }
  .container-image img {
    width: 100%;
    margin: 30px 0;
  }

  .container-button {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  button {
    color: white;
    background-color: var(--color-secondary);
    box-shadow: none;
    width: 220px;
    font-family: "Tilt Neon";
  }

  button:hover {
    background-color: #f57c00;
    box-shadow: none;
  }

  @media (min-width: 800px) {
    padding: 0 150px;
    width: 100%;

    .content-flex-desktop {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
    }

    .container-image {
      width: 50%;
      display: flex;
      justify-content: center;
    }
    .container-image img {
      width: 80%;
      margin: 30px 0;
    }
    .container-button {
      display: flex;
      justify-content: flex-end;
      padding-right: 36px;
    }
    .container-mensage {
      margin-top: 40px;
      width: 500px;
    }

    button {
      color: white;
      background-color: var(--color-secondary);
      box-shadow: none;
      width: 220px;
      font-family: "Tilt Neon";
    }

    button:hover {
      background-color: #f57c00;
      box-shadow: none;
    }
  }
`;
