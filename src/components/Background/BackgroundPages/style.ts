import styled from "styled-components";

export const First = styled.div`
  position: fixed;
  left: -430px;
  top: -340px;
  z-index: -100;

  border-radius: 50%;

  width: 596px;
  height: 607px;

  background: #adce53;
  opacity: 0.7;

  @media (min-width: 600px) {
    left: -330px;
    top: -140px;
  }

  @media (min-width: 1000px) {
    width: 860px;
    height: 860px;

    left: -430px;
    top: -340px;
  }
`;

export const Second = styled.div`
  position: fixed;
  left: -300px;
  top: 493px;
  z-index: -100;

  border-radius: 50%;

  width: 567px;
  height: 588px;

  background: #18a8e5;
  opacity: 0.7;

  @media (min-width: 600px) {
    width: 1160px;
    height: 1082px;

    left: -680px;
    top: 547px;
  }

  @media (min-width: 1000px) {
    width: 1160px;
    height: 1082px;

    left: -580px;
    top: 647px;
  }
`;

export const Third = styled.div`
  position: fixed;
  left: 210px;
  top: 150px;
  z-index: -100;

  border-radius: 50%;

  width: 537px;
  height: 504px;

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
    top: 381px;

    width: 1815px;
    height: 1614px;
  }
`;
