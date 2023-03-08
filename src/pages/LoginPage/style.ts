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
    padding: 0 20px;
  }

  h2 {
    color: var(--color-secundary);
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
    align-content: center;
    align-items: center;
    justify-content: center;
  }
  p {
    color: var(--color-secundary);
    text-align: end;
    font-size: 2.5rem;
  }

  .elipse1 {
    z-index: 0;
    position: absolute;
    position: absolute;
    left: -71px;
    bottom: -162px;
  }

  .elipse2 {
    z-index: 0;
    position: absolute;
    left: 0px;
    top: 67px;
  }
  .elipse3 {
    z-index: 0;
    position: absolute;
    right: -78px;
    top: 231px;
  }
  .elipse4 {
    display: none;
    z-index: 0;
    position: absolute;
    left: 0px;
    bottom: -674px;
  }
  .elipse5 {
    display: none;
    position: absolute;
    top: 78px;
    left: -17px;
  }
  .elipse6 {
    display: none;
    position: absolute;
    right: 0px;
    bottom: -674px;
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
    justify-content: space-between;
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
    padding: 48px 0;
    flex-direction: column;
    background-color: #e8f6fd;
  }

  .shopButton {
    background-color: var(--color-secundary);
    color: var(--color-primary);
    font-size: 1.5rem;
    font-weight: 400;
    height: 49px;
    width: 150px;
    padding: 0 10px;
    border-radius: 12px;
  }
  .shopButton:hover {
    background: --color-secundary-hover;
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
      display: block;
    }

    .mainContainer {
      flex-direction: row;
    }
    .elipse4 {
      display: block;
    }
    .elipse5 {
      display: block;
    }
    .elipse6 {
      display: block;
    }
    .elipse1 {
      display: none;
    }
    .elipse2 {
      display: none;
    }
    .elipse3 {
      display: none;
    }
  }
`;
