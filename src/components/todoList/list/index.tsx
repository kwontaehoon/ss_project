import React, { useEffect } from 'react'
import { FaTrash } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6'
import { ListDelete } from '../../../function/localStorage/List';
import { useAtom } from 'jotai';
import { listAtom, listCRUDModalAtom } from '../../../store/todoList';

const Index = () => {

  const [list, setList] = useAtom(listAtom);
  const [listCRUDModal, setListCRUDModal] = useAtom(listCRUDModalAtom);

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem('list')));
  }, []);

  return (
    <div className='py-2 overflow-y-scroll h-full flex-1'>
      {list?.map((x, index) => {
        return (
          <div className='flex items-center px-5 h-20 mb-4 border rounded-lg'>
            <div className='rounded-sm w-4 h-4 bg-lime-200 mr-2'></div>
            <div>{x.title}</div>
            <div className='flex justify-end flex-1'>
              <FaPencil className='rounded-sm mr-4 cursor-pointer'
                onClick={() => setListCRUDModal({ open: true, index: index, type: "update", listData: x, buttonText: "수정하기", nextFunc: setList })} />
              <FaTrash className='rounded-sm cursor-pointer'
                onClick={() => setListCRUDModal({ open: true, type: "delete", listData: x, mainText: "정말로 삭제하시겠습니까?", buttonText: "삭제하기", nextFunc: () => ListDelete(index, setList) })} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Index