import { atom } from 'jotai';

interface ListItem {
    id: number,
    title: string | number | null;
    date: Date;
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
    open: boolean;
    content?: string | number;
    buttonContent?: string;
    func?: () => void;
    lookList?: object[];
    setLookList?: React.Dispatch<React.SetStateAction<object[]>>;
    lookListBb?: object[];
    setLookListBb?: React.Dispatch<React.SetStateAction<object[]>>;
}

export const listAtom = atom<ListItem[]>([]);

export const listCRUDModalAtom = atom<ListCRUD>({
    open: false,
    type: '',
    listData: {id: 0, title: "", date: new Date()},
    mainText: '',
    buttonText: '',
    nextFunc: ()=>{}
});

export const lookListEditModalAtom = atom<LookList>({
    open: false,
    lookList: []
})

export const toDoListTextModalAtom = atom<LookList>({
    open: false,
    content: '',
    buttonContent: '',
    func: ()=>{},
    setLookList: ()=>{},
    lookListBb: [],
    setLookListBb: ()=>{}, 
})