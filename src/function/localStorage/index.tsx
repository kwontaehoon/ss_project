import { SetStateAction } from "react";

export const LocalStorageCreate = (newTitle:string, setProps:React.Dispatch<SetStateAction<any[]>>) => {
    let newList = [];
    const currentList = JSON.parse(localStorage.getItem('list'));
    if(!currentList){
        newList = [{id: 1, title: newTitle}];
    }else{
        newList = Object.assign([...currentList, {id: !currentList ? 1 :currentList.length+1, title: newTitle}]);
    }
    localStorage.setItem('list', JSON.stringify(newList));
    setProps(newList);

}

export const LocalStorageDelete = (listIndex:number, setProps:React.Dispatch<SetStateAction<any[]>>) => {
    const currentList = JSON.parse(localStorage.getItem('list'));
    const newList = currentList.filter((x:string, index:number) => index !== listIndex);
    localStorage.setItem('list', JSON.stringify(newList));
    setProps(newList);
}

export const LocalStorageUpdate = (listIndex:number, setProps:React.Dispatch<SetStateAction<any[]>>, content: string | number) => {
    console.log('content: ', content);
    const currentList = JSON.parse(localStorage.getItem('list'));
    console.log('currentList: ', currentList);
    currentList[listIndex] = {id: currentList[listIndex].id, title: content}
    const newList = currentList;
    localStorage.setItem('list', JSON.stringify(newList));
    setProps(newList);
}