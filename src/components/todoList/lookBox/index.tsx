import React, { useState } from 'react'
import { FaList, FaRegClipboard, FaCalendarAlt, FaRegTimesCircle } from 'react-icons/fa'
import { lookListText } from '../../../constants/Text/ToDoList'
import { Container, Box, CompleteBox } from '../../../layouts/todoList/LookBox'
import { LookBoxProps } from './type'
import { lookListCreate } from '../../../function/localStorage/LookList'

export const LookBox:React.FC<LookBoxProps> = ({top, bottom, filterDisplay, setFilterDisplay, lookList, setLookList}) => {

    const [listSelect, setListSelect] = useState(Array.from({length: 3}, () => false));

    const close = () => {
        setFilterDisplay({...filterDisplay, lookBox: false});
    }

  return (
    <Container top={top} bottom={bottom}>
        <div className='flex my-1 items-center'>
            <div className='flex text-sm'>새 보기</div>
            <div className='flex-1 flex justify-end'>
                <FaRegTimesCircle className='cursor-pointer' onClick={close} />
            </div>
        </div>
        <div className='flex'>
            {lookListText.map((x, index) => {
                return(
                    <Box
                        bg={listSelect[index]}
                        key={x.id}
                        onClick={()=>{
                            const newSelect = Array.from({length: 3}, ()=>false);
                            newSelect[index] = true;
                            setListSelect(newSelect);
                        }}>
                        {x.id == 1 ? <FaList /> : x.id == 2 ? <FaRegClipboard /> : <FaCalendarAlt />}
                        <div className='mt-4 text-xs whitespace-nowrap'>{x.title}</div>
                    </Box>
                )
            })}
        </div>
        <CompleteBox onClick={()=>{
            lookListCreate(listSelect);
            if(!lookList){
                setLookList([{id: 1, title: lookListText[listSelect.findIndex(x=>x)].title}]);
            }else{
                setLookList(Object.assign([...lookList, {id: lookList.length, title: lookListText[listSelect.findIndex(x=>x)].title}]));
            }
            close();
            }}>완료</CompleteBox>
    </Container>
  )
}