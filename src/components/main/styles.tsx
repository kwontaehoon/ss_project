import styled from 'styled-components'

const center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TH = {
    Container: styled.div`
        height: 100%;
        padding: 40px 20px;
    `,
    Header: styled(center)`
        height: 10%;
        padding-bottom: 40px;
    `,
    Main: styled.div`
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 20px;

        button {
            margin: 20px 0px;
            width: 180px;
            display: flex;
            justify-content: center;
            border-radius: 5px;
            background-color: rgb(217 249 157);
            padding: 10px 0px;
        }
    `,
    Footer: styled(center)`
        height: 10%;
        border: 1px solid black;
    `
};