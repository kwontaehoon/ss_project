import { atom } from 'jotai';

interface ListItem {
    id: number,
    title: string | number | null;
}

interface ListCRUD {
    open: boolean,
    type: string,
    listData?: ListItem, 
    mainText?: string,
    buttonText: string,
    nextFunc: any,
}

export const listAtom = atom<ListItem[]>([]);

export const listCRUDModalAtom = atom<ListCRUD>({
    open: false,
    type: '',
    listData: {id: 0, title: ""},
    mainText: '',
    buttonText: '',
    nextFunc: () => {}
});