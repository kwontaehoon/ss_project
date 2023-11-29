import React from 'react'
import styled from 'styled-components'
import { FaList, FaRegClipboard, FaCalendarAlt, FaRegTimesCircle } from 'react-icons/fa'
import { lookBoxText } from '../../constants/Text/ToDoList'

export const Container = styled.div<{ top: number, bottom: number }>`
    position: absolute;
    top: ${(props) => props.top}px;
    left: ${(props) => props.bottom}px;
    padding: 8px;
    background-color: white;
    border: 1px solid #E6E6E6;    
`
export const Box = styled.div<{ bg: boolean }>`
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
    background-color: ${(props) => props.bg ? 'rgb(217 249 157)' : 'white'};
`
export const CompleteBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 5px 0px;
    margin-top: 8px;
    background-color: rgb(217 249 157);
    cursor: pointer;
    font-size: 12px;
`