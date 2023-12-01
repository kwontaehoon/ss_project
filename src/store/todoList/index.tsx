import { atom } from 'jotai';

interface ListItem {
    id: number,
    title: string | number | null;
}

interface ListCRUD {
    open: boolean,
    type: string,
    index?: number;
    listData?: ListItem, 
    mainText?: string,
    buttonText: string,
    nextFunc?: any,
}

interface LookList {
    open: boolean,
    content?: string | number,
    buttonContent?: string
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

export const lookListEditModalAtom = atom<LookList>({
    open: false,
})

export const textModalAtom = atom<LookList>({
    open: false,
    content: '',
    buttonContent: ''
})