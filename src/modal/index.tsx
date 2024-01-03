import React from 'react'
import { listCRUDModalAtom, lookListEditModalAtom, toDoListTextModalAtom } from '../store/todoList'
import { useAtom } from 'jotai'
import { ListCRUDModal } from './todoList/ListCRUDModal'
import { LookListModal } from './todoList/LookListEdit'
import { ToDoListTextModal } from './todoList/TextModal'
import { LoginTextModal } from './account/TextModal'

const Index = () => {

  const [listCRUDModal, setListCRUDModal] = useAtom(listCRUDModalAtom);
  const [lookListEditModal, setLookListEditModal] = useAtom(lookListEditModalAtom);
  const [toDoListTextModal, setToDoListTextModal] = useAtom(toDoListTextModalAtom);
  const [loginTextModal, setLoginTextModal] = useAtom(toDoListTextModalAtom);

  return (
    <>
        {listCRUDModal.open && <ListCRUDModal /> }
        {lookListEditModal.open && <LookListModal/>}
        {toDoListTextModal.open && <ToDoListTextModal />}
        {loginTextModal.open && <LoginTextModal />}


    </>
  )
}

export default Index