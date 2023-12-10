import React from 'react'
import { TH } from './styles'
import { FaArrowLeft } from "react-icons/fa";
import { useAtom } from 'jotai';
import { listAtom, listCRUDModalAtom } from '../../store/todoList';
import { useNavigate, useParams } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6'
import { ListDelete } from '../../function/localStorage/List';

const TodoListDetails = () => {

  const params: any = useParams().id;
  const navigate = useNavigate();

  const [list, setList] = useAtom(listAtom);
  const [listCRUDModal, setListCRUDModal] = useAtom(listCRUDModalAtom);

  return (
    <TH.Container>
      <TH.Header>
        <FaArrowLeft className='mr-8' onClick={() => navigate("/to_do_list")} />
        <div className='flex-1'>{list[params].title}</div>
        <div className='flex justify-end flex-1'>
          <FaPencil className='rounded-sm mr-4 cursor-pointer'
            onClick={() => setListCRUDModal({ open: true, index: params, type: "update", listData: list[params], buttonText: "수정하기", nextFunc: setList })} />
          <FaTrash className='rounded-sm cursor-pointer'
            onClick={() => setListCRUDModal({ open: true, type: "delete", listData: list[params], mainText: "정말로 삭제하시겠습니까?", buttonText: "삭제하기", nextFunc: () => ListDelete(params, setList) })} />
        </div>
      </TH.Header>
      <TH.Main>
        <div>{list[params].title}</div>
      </TH.Main>
    </TH.Container>
  )
}

export default TodoListDetails