import React, { useState } from 'react'
import { MODAL, MODALSUB } from '../../layouts/modal'
import { useAtom } from 'jotai'
import { listCRUDModalAtom } from '../../store/todoList'
import { InputBox } from '../../function/input'
import { useModifyMutation } from '../../hooks/queries/ToDoList'

export const ListCRUDModal = () => {

  const [listCRUDModal, setListCRUDModal] = useAtom(listCRUDModalAtom);

  const [content, setContent] = useState<string | number>(listCRUDModal.listData.title);
  const { mutateAsync: listModify } = useModifyMutation();

  return (
    <MODAL>
      <MODALSUB>
        <div className='flex justify-center font-bold mb-5'>{listCRUDModal.type == "update" ? '수정하기' : '삭제하기'}</div>
        <div className='flex justify-center'>{listCRUDModal.mainText}</div>
        {listCRUDModal.type == "update" && <InputBox width={"100%"} height={40} mh={0} placeholder={(listCRUDModal.listData.title).toString()} setContent={setContent}/>}
        <div className='flex mt-5 h-10'>
          <div className='flex-1 border flex items-center justify-center mr-1 rounded cursor-pointer'
            onClick={() => setListCRUDModal({ ...listCRUDModal, open: false })}>닫기</div>
          <div className='flex-1 border flex items-center justify-center ml-1 rounded cursor-pointer bg-lime-200'
            onClick={async() => {
              if(listCRUDModal.type == "update"){
                await listModify({id: listCRUDModal.listData.id, title: content});
              }
              listCRUDModal.nextFunc();
              setListCRUDModal({ ...listCRUDModal, open: false });
            }
            }>{listCRUDModal.buttonText}
          </div>
        </div>
      </MODALSUB>
    </MODAL>
  )
}