import styled from "styled-components";

const center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TH = {
    Header: styled(center)`
        border: 1px solid black;
        height: 10%;
    `,
    Main: styled.div`
        border: 1px solid black;
        height: 80%;
        padding: 20px;
        display: flex;
        flex-direction: column;
    `,
    Footer: styled.div`
        border: 1px solid black;
        height: 10%;
    `
  };