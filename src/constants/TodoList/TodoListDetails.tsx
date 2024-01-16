import React from 'react'
import { TH } from './styles'
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6'

const TodoListDetails = () => {

  const params = useLocation().state;
  const navigate = useNavigate();

  return (
    <TH.Container>
      <TH.Header>
        <FaArrowLeft className='mr-8 cursor-pointer' onClick={() => navigate("/to_do_list")} />
        <div className='flex-1'>{params.title}</div>
        <div className='flex justify-end flex-1'>
          <FaPencil className='rounded-sm mr-4 cursor-pointer'
            onClick={() => ""} />
          <FaTrash className='rounded-sm cursor-pointer'
            onClick={() => ""} />
        </div>
      </TH.Header>
      <TH.Main>
        <div>{params.title}</div>
      </TH.Main>
    </TH.Container>
  )
}

export default TodoListDetails