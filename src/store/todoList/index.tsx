import { atom } from 'jotai';

interface ListItem {
    id: number,
    title: string | number | null;
}

export const listAtom = atom<ListItem[]>([
    {id: 1, title: 111},
    {id: 2, title: 222}
]);

export const modifyAtom = atom(false);