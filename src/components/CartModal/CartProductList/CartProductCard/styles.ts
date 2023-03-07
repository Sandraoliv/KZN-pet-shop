import styled from "styled-components";

export const StyledCartProductCard = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  justify-content: space-between;

  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;
