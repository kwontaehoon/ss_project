import React from 'react'
import List from './list/index'
import Board from './board'
import Calenar from './calendar'
import { MAIN } from '../../layouts/main'
import { TH } from '../main/styles'

const index = () => {
    return (
        <>
            <MAIN.Container>
                <MAIN.SubContainer>
                    <TH.Header>
                        <div>To Do List</div>
                    </TH.Header>
                    <List />
                    <Calenar />
                    <TH.Footer>
                        footer
                    </TH.Footer>
                </MAIN.SubContainer>
            </MAIN.Container>
        </>
    )
}

export default index