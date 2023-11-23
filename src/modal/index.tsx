import React from 'react'
import Test from './todoList/Test'
import { textModalAtom } from '../store/todoList'
import { useAtom } from 'jotai'
import { TextModal } from './todoList/TextModal'

const Index = () => {
  const [textModal, setListModify] = useAtom(textModalAtom);

  return (
    <>
        {textModal.open && < TextModal /> }

    </>
  )
}

export default Index