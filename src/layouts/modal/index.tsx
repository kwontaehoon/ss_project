import styled from "styled-components";

export const MODAL = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    &::-webkit-scrollbar{
      display: none;
    }
`
export const MODALSUB = styled.div`
    position: absolute;
    width: 350px;
    padding: 30px;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`