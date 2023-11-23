import { atom } from 'jotai';

interface ListItem {
    id: number,
    title: string | number | null;
}

interface ListCRUD {
    open: boolean,
    nextFunc: any
}

export const listAtom = atom<ListItem[]>([]);

export const textModalAtom = atom<ListCRUD>({
    open: false,
    nextFunc: () => {}
});