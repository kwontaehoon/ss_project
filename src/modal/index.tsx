import React from 'react'
import Test from './todoList/Test'
import { modifyAtom } from '../store/todoList'
import { useAtom } from 'jotai'

const Index = () => {
  const [modify, setModify] = useAtom(modifyAtom);

  return (
    <>
        {modify && <Test />}
    </>
  )
}

export default Index