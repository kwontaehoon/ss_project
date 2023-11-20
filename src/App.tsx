import React from 'react'
import { Outlet } from 'react-router-dom'
import { MAIN } from './layouts/main'
import Modal from './modal'

const App = () => {

  return (
    <>
    <MAIN.Container>
      <Modal />
      <MAIN.SubContainer>
        <Outlet />
      </MAIN.SubContainer>
    </MAIN.Container>
    </>
  )
}

export default App