import React from 'react'
import Test from './todoList/Test'
import { modify } from '../store/todoList'
import { useAtom } from 'jotai'

const Index = () => {
  const [modifyAtom, setModifyAtom] = useAtom(modify);

  return (
    <>
        {modifyAtom && <Test />}
    </>
  )
}

export default Index