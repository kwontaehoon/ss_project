import styled from 'styled-components'

const center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const S = {
    Container: styled.div`
        height: 100%;
        padding: 20px;
    `,
    Header: styled(center)`
        height: 10%;
        margin-bottom: 40px;
    `,
    Main: styled.div`
        height: 80%;
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size: 20px;

        button {
            margin: 20px 0px;
            width: 180px;
            display: flex;
            justify-content: center;
            border-radius: 5px;
            background-color: aquamarine;
            padding: 10px 0px;
        }
    `,
    Footer: styled(center)`
        height: 10%;
    `
};