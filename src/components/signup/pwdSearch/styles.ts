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
        flex-direction: column;
    `,
    Header: styled.div`
        margin-bottom: 40px;
    `,
    Main: styled.div`
        width: 300px;
        align-items: center;
        font-size: 12px;

        input {
            border-bottom: 1px solid grey;
            padding-bottom: 5px;
        }
    `,
    Button: styled.div`
        margin: 20px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        background-color: rgb(217 249 157);
        font-weight: 600;
        cursor: pointer;
    `,
    Footer: styled(center)`

    `
};