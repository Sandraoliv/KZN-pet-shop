import styled from "styled-components";

export const StyledLoginPage = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  height: 100%;
  justify-content: space-evenly;
  width: 100vw;

  .blockAndTitle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    color: var(--color-secondary);
    font-size: 2.5rem;
    margin-left: 8px;
    font-weight: 300;
  }

  .rectangle {
    width: 19px;
    height: 41px;
  }
  .containerDesktop {
    width: 746px;
    height: 100%;
    display: flex;
    gap: 17px;
    flex-direction: column;
    align-items: flex-end;
    display: none;
    z-index: 4;
  }
  .imgDesktop {
    width: 100%;
    height: 100%;
  }
  .arrow {
    margin-bottom: 2rem;
    transform: rotateY(-18deg);
  }

  .mainContainer {
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 1400px;
    max-height: 900px;
    align-items: flex-end;
    justify-content: center;
  }

  .formContainer {
    display: flex;
    border-radius: 20px;
    height: max-content;
    margin: 0 auto;
    align-items: flex-start;
    justify-content: flex-end;
    align-self: end;
    padding: 40px;
    flex-direction: column;
    background-color: #e8f6fd;
  }

  @media (min-width: 769px) {
    .imageText {
      color: var(--color-secondary);
      text-align: start;
      font-size: 2.2rem;
    }

    .StyledLoginPage {
      display: flex;
      justify-content: center;
      align-items: center;
      max-height: 1188px;
    }

    .formContainer {
      width: 516px;
      height: max-content;
    }

    .containerDesktop {
      display: flex;

      flex-direction: row;
    }

    .mainContainer {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
`;
