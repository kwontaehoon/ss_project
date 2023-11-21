import React from 'react'
import styled from 'styled-components'
import { FaList, FaRegClipboard, FaCalendarAlt, FaRegTimesCircle } from 'react-icons/fa'
import { lookBoxText } from '../../constants/Text/ToDoList'

interface LookBoxProps {
    top: number;
    bottom: number;
    filterDisplay: object;
    setFilterDisplay: (v: object | null) => void;
};

const Container = styled.div<{ top: number, bottom: number }>`
    position: absolute;
    top: ${(props) => props.top}px;
    left: ${(props) => props.bottom}px;
    padding: 8px;
    background-color: white;
    border: 1px solid #E6E6E6;    
`
const Box = styled.div`
    border: 1px solid #E6E6E6;
    cursor: pointer;
    margin: 0px 4px;
    padding: 10px 32px;
    padding-bottom: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 32px;
    border-radius: 8px;

    &:hover {
        background-color: rgb(217 249 157);
    }
`
const CompleteBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 5px 0px;
    margin-top: 8px;
    background-color: rgb(217 249 157);
    cursor: pointer;
    font-size: 12px;
`

export const LookBox:React.FC<LookBoxProps> = ({top, bottom, filterDisplay, setFilterDisplay}) => {

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
            {lookBoxText.map(x => {
                return(
                    <Box
                        onClick={close}>
                        {x.id == 1 ? <FaList /> : x.id == 2 ? <FaRegClipboard /> : <FaCalendarAlt />}
                        <div className='mt-4 text-xs whitespace-nowrap'>{x.title}</div>
                    </Box>
                )
            })}
        </div>
        <CompleteBox onClick={close}>완료</CompleteBox>
    </Container>
  )
}