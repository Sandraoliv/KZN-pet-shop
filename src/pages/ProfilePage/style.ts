import styled from "styled-components";

export const SectionProfilePage = styled.section`
  height: 100vh;

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;

    height: 100%;
  }

  main > img {
    width: 300px;
    height: 300px;
  }

  .infos {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    width: max-content;
    height: max-content;
    gap: 200px;

    padding: 85px;

    background: #adce53;
    border-radius: 20px;
  }

  main > section > ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
  }

  li {
    font-size: 25px;
    color: #f57c00;
  }

  .navBtn > button {
    color: var(--color-secondary);
  }

  .navBtn:hover {
    color: #f57c00;
  }
`;

export const DialogProfilePage = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 400px;
  height: max-content;
  background: var(--color-grey-3);

  margin: 40px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  h4 {
    font-weight: 400;
    font-size: 20px;
    color: var(--color-secondary);
  }

  .icon {
    color: var(--color-secondary);
  }

  .icon:hover {
    color: #f57c00;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .btnSubmit {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-secondary);

    width: 100%;
    height: 45px;

    font-family: "Tilt Neon";

    border-radius: 10px;

    box-shadow: none;
  }

  .btnSubmit:hover {
    background-color: #f57c00;
    box-shadow: none;
  }
`;
