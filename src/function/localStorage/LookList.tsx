import { lookListText } from "../../constants/Text/ToDoList";

export const lookListCreate = (listSelect:boolean[]) => {
    let newList = [];
    const currentList = JSON.parse(localStorage.getItem('lookList'));
    if(!currentList){
        newList = [{id: 1, title: lookListText[listSelect.findIndex(x=>x)].title}];
    }else{
        newList = Object.assign([...currentList, {id: !currentList ? 1 :currentList.length+1, title: lookListText[listSelect.findIndex(x=>x)].title}]);
    }
    localStorage.setItem('lookList', JSON.stringify(newList));
    // setProps(newList);
}

export const lookListDelete = () => {
    const newList = [];
    const currentList = JSON.parse(localStorage.getItem('lookList'));
}