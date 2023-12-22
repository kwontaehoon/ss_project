import styled from 'styled-components'

const center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TH = {
    Container: styled(center)`
        height: 100%;
        padding: 40px 20px;
        flex-direction: column;
    `,
    Header: styled(center)`

    `,
    Main: styled.div`
        width: 300px;
        align-items: center;
        font-size: 12px;

        button {
            margin: 20px 0px;
            height: 40px;
            background-color: rgb(217 249 157);
            font-weight: 600;
        }
    `,
    Footer: styled(center)`

    `
};