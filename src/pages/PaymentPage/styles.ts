import styled from "styled-components";
import background from "../../assets/background.svg";

export const StyledPayment = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledSectionPayment = styled.div`
  height: 100%;
`;
