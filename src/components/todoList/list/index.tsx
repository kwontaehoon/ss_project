import React, { useEffect } from 'react'
import { FaTrash } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6'
import { ListDelete } from '../../../function/localStorage/List';
import { useAtom } from 'jotai';
import { listCRUDModalAtom } from '../../../store/todoList';
import { ListProps } from './type';
import { useNavigate } from 'react-router-dom';
import { useDeleteMutation } from '../../../hooks/queries/ToDoList';

const Index:React.FC<ListProps> = ({list, refetch}) => {

  const navigate = useNavigate();
  const [listCRUDModal, setListCRUDModal] = useAtom(listCRUDModalAtom);
  const { mutateAsync: listDelete } = useDeleteMutation();

  return (
    <div className='py-2 flex-1 text-sm'>
      {list?.data.map((x:any, index:number) => {
        return (
          <div key={x.id} className='flex items-center px-5 h-20 mb-4 border rounded-lg'>
            <div className='rounded-sm w-4 h-4 bg-lime-200 mr-2'></div>
            <div onClick={()=>navigate(`/to_do_list/${index}`)}>{x.title}</div>
            <div className='flex justify-end flex-1'>
              <FaPencil className='rounded-sm mr-4 cursor-pointer'
                onClick={() => 
                setListCRUDModal({ 
                  open: true, 
                  index: index, 
                  type: "update", 
                  listData: x, 
                  buttonText: "수정하기",
                  nextFunc: () => refetch() })} />
              <FaTrash className='rounded-sm cursor-pointer'
                onClick={() => 
                  setListCRUDModal({ 
                    open: true, 
                    type: "delete", 
                    listData: x, mainText: "정말로 삭제하시겠습니까?", 
                    buttonText: "삭제하기",
                    nextFunc: async() => { await listDelete({id: x.id}); refetch(); }})} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Index