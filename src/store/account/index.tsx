import { atom } from 'jotai';

interface Login {
    open: boolean,
    content?: string | number;
}

export const loginTextModalAtom = atom<Login>({
    open: false,
    content: '',
});
