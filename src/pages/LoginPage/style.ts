import styled from "styled-components";

export const StyledLoginPage = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
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
    width: 649px;
    height: 566px;
    display: flex;
    flex-direction: column;
    align-items: center;
    display: none;
    z-index: 4;
  }
  .imgDesktop {
    width: 581px;
    height: 410px;
  }
  .arrowContainer {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
  }
  .imageText {
    color: var(--color-secondary);
    text-align: end;
    font-size: 2.5rem;
  }

  .mainContainer {
    z-index: 4;
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 780px;
    align-items: flex-end;
    justify-content: center;
  }

  .formContainer {
    z-index: 3;
    display: flex;
    border-radius: 20px;
    height: 702px;
    width: 90%;
    margin: 0 auto;
    align-items: flex-start;
    justify-content: flex-end;
    align-self: end;
    padding: 40px;
    flex-direction: column;
    background-color: #e8f6fd;
  }

  @media (min-width: 769px) {
    .StyledLoginPage {
      display: flex;
      justify-content: center;
      align-items: center;
      max-height: 1188px;
    }

    .formContainer {
      width: 616px;
      height: 702px;
    }

    .containerDesktop {
      display: flex;
      flex-direction: row;
    }

    .mainContainer {
      flex-direction: row;
    }
  }
`;
