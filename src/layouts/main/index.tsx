import styled from "styled-components";

export const MAIN = {
    Container: styled.div`
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #F5F5F5;

      @media (max-width: 1024px) {

      }
    `,
    SubContainer: styled.div`
      width: 520px;
      height: 100%;
      background-color: white;
      border-radius: 15px;

      @media (max-width: 768px) {
        width: 100%;
      }
    `
  };