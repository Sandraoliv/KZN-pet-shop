import styled from "styled-components";

export const StyledFieldset = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  gap: 8px;

  input {
    padding: 0 12px;
    width: 100%;
    height: 50px;
    border-radius: 12px;
    outline: none;
  }
  label {
    color: #ff9b00;
    font-size: 1.87rem;
    width: max-content;
  }
  .errors {
    font-size: 1rem;
  }
  ::placeholder {
    color: var(--grey-300);
  }
`;
