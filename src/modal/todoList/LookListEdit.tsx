import React, { useState } from 'react'
import { MODAL, MODALSUB } from '../../layouts/modal'
import { FaTh, FaPen, FaRegTrashAlt, FaClone, FaChevronRight } from 'react-icons/fa';
import { lookListEditText } from '../../constants/Text/ToDoList';
import { useAtom } from 'jotai';
import { lookListEditModalAtom, textModalAtom } from '../../store/todoList';
import { lookListDelete } from '../../function/localStorage/LookList';

export const LookListModal = () => {

    const [lookListEditModal, setLookListEdit] = useAtom(lookListEditModalAtom);
    const [lookListEditAct, setLookListEditAct] = useState<Boolean[]>(Array(3).fill(false));
    const [textModal, setTextModal] = useAtom(textModalAtom);

    const func = (index: number) => {
        if (index == 3) {
            setLookListEdit({ open: false });
            setTextModal({ open: true, content: "이 보기를 제거하시겠습니까?", buttonContent: "보기 제거", func: ()=>{lookListDelete(lookListEditModal.lookList, lookListEditModal.setLookList, lookListEditModal.lookListBb, lookListEditModal.setLookListBb)}});
        }
    }

    return (
        <MODAL>
            <MODALSUB>
                <div className='flex relative justify-center items-center border-b pb-2'>
                    <div>보기 편집</div>
                    <div className='absolute right-0 text-xs cursor-pointer' onClick={() => setLookListEdit({ open: false })}>완료</div>
                </div>
                <label style={{backgroundColor: "yellow"}} />

                <div className='py-2'>
                    {lookListEditText.map((x, index) => {
                        return (
                            <div key={x.id} className='flex items-center mt-3 relative cursor-pointer' onClick={()=>func(index)}>
                                {index == 0 ? <FaTh /> : index == 1 ? <FaPen /> : index == 2 ? <FaClone /> : <FaRegTrashAlt />}
                                <div className='ml-2'>{x.title}</div>
                                <div className='absolute right-0 flex items-center text-xs'>
                                    <div>없음</div>
                                    <FaChevronRight />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </MODALSUB>
        </MODAL>
    )
}