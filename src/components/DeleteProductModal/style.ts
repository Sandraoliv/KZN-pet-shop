import styled from "styled-components";

export const StyledModalDeleteProduct = styled.div`
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
    position: relative;
    border-radius: 20px;
    margin-top: 200px;
    gap: 10px;
    width: 50%;
    max-width: 300px;
    padding: 32px;
    background-color: white;
  }

  span {
    font-size: 1.25rem;
    position: absolute;
    cursor: pointer;
    right: 20px;
    top: 20px;
  }

  p {
    width: 100%;
    text-align: center;
  }

  button {
    width: 100%;
    padding: 10px 16px;
    background-color: var(--color-secondary);
    border-radius: 10px;
    color: white;
  }

  button:hover {
    background-color: var(--color-secondary-hover);
  }
`;
