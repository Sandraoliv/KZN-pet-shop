import styled from "styled-components";

export const First = styled.div`
  position: absolute;
  left: -430px;
  top: 400px;
  z-index: -100;

  border-radius: 50%;

  width: 596px;
  height: 607px;

  background: #adce53;
  opacity: 0.7;

  @media (min-width: 600px) {
    left: -330px;
    top: -340px;
  }

  @media (min-width: 1000px) {
    width: 860px;
    height: 860px;

    left: -430px;
    top: 50px;
  }
`;

export const Second = styled.div`
  position: absolute;
  bottom: 0;
  right: 50%;
  z-index: -100;

  border-radius: 600px 9000px 0 0;

  width: 567px;
  height: 588px;

  background: #18a8e5;
  opacity: 0.7;

  @media (min-width: 600px) {
    width: 1160px;
    height: 1082px;

    left: -680px;
    bottom: 0;
  }

  @media (min-width: 1000px) {
    width: 1000px;
    height: 1000px;

    rigth: 600px;
    bottom: 0;
  }
`;

export const Third = styled.div`
  position: absolute;
  left: 210px;
  top: 1200px;
  z-index: -100;

  border-radius: 50%;

  width: 537px;
  height: 1000px;

  background: #ff9b00;
  opacity: 0.7;

  @media (min-width: 600px) {
    left: 492px;
    top: 20px;

    width: 1415px;
    height: 1214px;
  }

  @media (min-width: 1000px) {
    left: 692px;
    top: 700px;

    width: 1815px;
    height: 1614px;
  }
`;

export const Teste = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100px;
  width: 200px;
  border-radius: 150px 150px 0 0;
  background-color: green;
`;
