import styled from "styled-components";

export const StyledCartModal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(24, 168, 229, 0.3);
  z-index: 10;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    padding: 10px;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    background-color: white;
  }
  .closeModal {
    cursor: pointer;
    font-size: 1.5rem;
  }

  .prices {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .prices > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  & > div {
    padding: 16px;
  }

  & > div > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  h2 {
    font-weight: 100;
  }

  .prices > .payment {
    padding: 8px 16px;
    color: white;
    text-align: center;
    width: 100%;
    margin-top: 15px;
    bottom: 20px;
    border-radius: 10px;
    background-color: var(--color-secondary);
  }

  .emptyCart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .emptyCart > div > p {
    padding: 16px;
    text-align: center;
    width: 100%;
    font-size: 1.5rem;
  }
  .emptyCart > button {
    padding: 8px 16px;
    color: white;
    width: 100%;
    margin-top: 15px;
    bottom: 20px;
    border-radius: 10px;
    background-color: var(--color-secondary);
  }

  .cachorrinhoModal {
    width: 100%;
    height: 100%;
  }
`;
