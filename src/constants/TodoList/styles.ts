import styled from 'styled-components'

const center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TH = {
    Container: styled.div`
        height: 100%;
        padding: 20px;
    `,
    Header: styled.div`
        height: 10%;
        border-bottom: 1px solid black;
        display: flex;
        align-items: center;
     `,
    Main: styled.div`
        height: 90%;
        margin-top: 10px;
        font-size: 20px;
        overflow-y: scroll;
            &::-webkit-scrollbar {
                border-radius: 6px;
            }

        button {
            margin: 20px 0px;
            width: 180px;
            display: flex;
            justify-content: center;
            border-radius: 5px;
            background-color: rgb(217 249 157);
            padding: 10px 0px;
        }
    `
};