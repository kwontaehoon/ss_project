import React from 'react'
import { Outlet } from 'react-router-dom'
import { S } from './styles'

const App = () => {

  return (
    <S.Container>
      <S.SubContainer>
        <Outlet />
      </S.SubContainer>
    </S.Container>
  )
}

export default App