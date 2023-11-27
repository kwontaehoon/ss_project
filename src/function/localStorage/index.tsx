import { SetStateAction } from "react";

export const LocalStorageCreate = (newTitle:string, setProps:React.Dispatch<SetStateAction<any[]>>) => {
    const currentList = JSON.parse(localStorage.getItem('list'));
    const newList = Object.assign([...currentList, {id: !currentList ? 1 :currentList.length+1, title: newTitle}]);
    localStorage.setItem('list', JSON.stringify(newList));
    setProps(newList);

}

export const LocalStorageDelete = (listIndex:number, setProps:React.Dispatch<SetStateAction<any[]>>) => {
    const currentList = JSON.parse(localStorage.getItem('list'));
    const newList = currentList.filter((x:string, index:number) => index !== listIndex);
    localStorage.setItem('list', JSON.stringify(newList));
    setProps(newList);
}