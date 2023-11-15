import styled from 'styled-components'

const center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const S = {
    Container: styled.div`
        height: 100%;
    `,
    Header: styled(center)`
        height: 10%;
    `,
    Main: styled(center)`
        height: 80%;
        justify-content: space-evenly;
        flex-direction: column;
    `,
    Footer: styled(center)`
        height: 10%;
    `
};