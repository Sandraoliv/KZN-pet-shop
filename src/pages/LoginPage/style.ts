import styled from "styled-components";

export const StyledLoginPage = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  min-height: 100vh;

  .blockAndTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }

  h2 {
    color: var(--color-secondary);
    color: #ff9b00;
    font-size: 2.5rem;
    margin-left: 8px;
    font-weight: 300;
  }
  .rectangle {
    width: 19px;
    height: 41px;
  }
  .imgDesktop {
    width: 660px;
    height: 590px;
    display: none;

    @media (min-width: 769px) {
      display: block;
    }
  }
  p {
    color: var(--color-secondary);
    color: #ff9b00;
    font-size: 2.5rem;
  }
  /* 
  .mainContainer {
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  } */

  /* .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 60%;
    height: 100%;
    justify-content: space-around;
    gap: 40px;
    height: 100%;
    display: none;
  } */

  .formContainer {
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
    background-color: #ff9b00;
    color: #fff2ea;
    font-size: 1.5rem;
    font-weight: 400;
    height: 49px;
    width: 150px;
    padding: 0 10px;
    border-radius: 12px;
  }
  .shopButton:hover {
    background: #ff9b00;
    opacity: 0.7;
  }

  @media (min-width: 769px) {
    .formContainer {
      width: 616px;
      height: 702px;
    }
  }
`;
