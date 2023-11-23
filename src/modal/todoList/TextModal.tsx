import React from 'react'
import styled from 'styled-components'
import { MODAL, MODALSUB } from '../../layouts/modal'

const Container = styled.div`
    background-color: blueviolet;
`

export const TextModal = () => {
  return (
    <MODAL>
        <MODALSUB>
            grgregr
        </MODALSUB>
    </MODAL>
  )
}