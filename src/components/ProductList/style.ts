import styled from "styled-components";

export const StyledProductList = styled.ul`
  display: flex;
  flex-direction: row;

  align-items: flex-start;

  gap: 10px;
  margin-bottom: 20px;
  width: 90%;
  overflow: auto;
  @media (min-width: 1500px) {
    justify-content: center;
  }
`;
