import { lookListText } from "../../constants/Text/ToDoList";

export const lookListCreate = (listSelect: boolean[]) => {
    let newList = [];
    const currentList = JSON.parse(localStorage.getItem('lookList'));
    if(!currentList){
        newList = [{id: 1, title: lookListText[listSelect.findIndex(x=>x)].title}];
    }else{
        newList = Object.assign([...currentList, {id: !currentList ? 1 :currentList.length+1, title: lookListText[listSelect.findIndex(x=>x)].title}]);
    }
    localStorage.setItem('lookList', JSON.stringify(newList));
}

export const lookListDelete = (list: object[], setList:any, listBb: object[], setLookListBb: any) => {
    const currentList = JSON.parse(localStorage.getItem('lookList'));
    const newList = currentList.filter((x:string, index:number) => index !== listBb.findIndex(x=>x));
    const newListBb = Array.from({length: listBb.length-1}, (_, index)=>index == listBb.findIndex(x=>x)-1)
    localStorage.setItem('lookList', JSON.stringify(newList));
    setList(newList);
    setLookListBb(newListBb);
}