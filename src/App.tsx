import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div>헤더입니다.</div>
      <Outlet />
      <div>푸터입니다.</div>
    </>
  )
}

export default App