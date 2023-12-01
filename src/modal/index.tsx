import React from 'react'
import { listCRUDModalAtom, lookListEditModalAtom, textModalAtom } from '../store/todoList'
import { useAtom } from 'jotai'
import { ListCRUDModal } from './todoList/ListCRUDModal'
import { LookListModal } from './todoList/LookListEdit'
import { TextModal } from './todoList/TextModal'

const Index = () => {

  const [listCRUDModal, setListCRUDModal] = useAtom(listCRUDModalAtom);
  const [lookListEditModal, setLookListEditModal] = useAtom(lookListEditModalAtom);
  const [textModal, setTextModal] = useAtom(textModalAtom);

  return (
    <>
        {listCRUDModal.open && <ListCRUDModal /> }
        {lookListEditModal.open && <LookListModal/>}
        {textModal.open && <TextModal />}


    </>
  )
}

export default Index