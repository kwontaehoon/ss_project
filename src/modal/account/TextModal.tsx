import React from 'react'
import { MODAL, MODALSUB } from '../../layouts/modal'
import { loginTextModalAtom } from '../../store/account';
import { useAtom } from 'jotai';

export const LoginTextModal = () => {

    const [textModal, setTextModal] = useAtom(loginTextModalAtom);

    return (
        <MODAL>
            <MODALSUB>
                <div className='flex justify-center font-bold mb-5'>{textModal.content}</div>
            </MODALSUB>
        </MODAL>
    )
}