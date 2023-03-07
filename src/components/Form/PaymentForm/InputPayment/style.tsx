import styled from "styled-components";

export const StyledFieldsetPayment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 8px;

  label {
    color: #ff9b00;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
  }

  input {
    width: 100%;
    outline: none;
    height: 50px;
    border-radius: 12px;
    padding: 0 8px;
    margin-bottom: 2rem;
  }
`;
