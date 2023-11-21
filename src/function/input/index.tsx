import React from 'react'
import styled from 'styled-components'

interface InputBoxProps {
  width: number;
  height: number;
  mh: number;
  setContent: (v: string) => void;
}

const Input = styled.input<{ width: number, height: number, mh: number }>`
    border: 1px solid black;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    margin: ${(props) => props.mh}px 0px;
    border-radius: 10px;
    padding: 0px 20px;
`

export const InputBox:React.FC<InputBoxProps> = ({width, height, mh, setContent}) => {
  return <Input 
          width={width} 
          height={height} 
          mh={mh} 
          onChange={(e)=>setContent(e.target.value)}/>
}