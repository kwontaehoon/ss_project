import { SetStateAction } from "react";

export const ListCreate = (newTitle:string, setProps:React.Dispatch<SetStateAction<any[]>>) => {
    let newList = [];
    const currentList = JSON.parse(localStorage.getItem('list'));
    if(!currentList){
        newList = [{id: 1, title: newTitle, date: new Date()}];
    }else{
        newList = Object.assign([...currentList, {id: !currentList ? 1 :currentList.length+1, title: newTitle, date: new Date()}]);
    }
    localStorage.setItem('list', JSON.stringify(newList));
    setProps(newList);
}

export const ListDelete = (listIndex:number, setProps:React.Dispatch<SetStateAction<any[]>>) => {
    const currentList = JSON.parse(localStorage.getItem('list'));
    const newList = currentList.filter((x:string, index:number) => index !== listIndex);
    localStorage.setItem('list', JSON.stringify(newList));
    setProps(newList);
}

export const ListUpdate = (listIndex:number, setProps:React.Dispatch<SetStateAction<any[]>>, content: string | number) => {
    const currentList = JSON.parse(localStorage.getItem('list'));
    const newList = currentList;
    currentList[listIndex] = {id: currentList[listIndex].id, title: content}
    localStorage.setItem('list', JSON.stringify(newList));
    setProps(newList);
}