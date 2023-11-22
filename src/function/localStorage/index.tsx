export const LocalStorage = (newArray:any) => {
    console.log('newArray: ', newArray);

    localStorage.setItem('list', JSON.stringify(newArray));

}
