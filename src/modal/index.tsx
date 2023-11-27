import React from 'react'
import { listCRUDModalAtom } from '../store/todoList'
import { useAtom } from 'jotai'
import { ListCRUDModal } from './todoList/ListCRUDModal'

const Index = () => {
  const [listCRUDModal, setListCRUDModal] = useAtom(listCRUDModalAtom);

  return (
    <>
        {listCRUDModal.open && <ListCRUDModal /> }

    </>
  )
}

export default Index