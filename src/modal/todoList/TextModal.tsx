import React from 'react'
import { MODAL, MODALSUB } from '../../layouts/modal'
import { useAtom } from 'jotai'
import { textModalAtom } from '../../store/todoList';

export const TextModal = () => {

    const [textModal, setTextModal] = useAtom(textModalAtom);

    return (
        <MODAL>
            <MODALSUB>
                <div className='flex justify-center font-bold mb-5'>{textModal.content}</div>

                <div className='flex mt-5 h-10'>
                    <div className='flex-1 border flex items-center justify-center mr-1 rounded cursor-pointer'>닫기</div>
                    <div className='flex-1 border flex items-center justify-center ml-1 rounded cursor-pointer bg-lime-200'>{textModal.buttonContent}</div>
                    </div>
            </MODALSUB>
        </MODAL>
    )
}