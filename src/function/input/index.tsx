import React from 'react'
import styled from 'styled-components'

interface InputBoxProps {
  width: string;
  height: number;
  mh: number;
  placeholder?: string;
  setContent: (v: string) => void;
}

const Input = styled.input<{ width: string, height: number, mh: number }>`
    border: 1px solid black;
    width: ${(props) => props.width};
    height: ${(props) => props.height}px;
    margin: ${(props) => props.mh}px 0px;
    border-radius: 10px;
    padding: 0px 20px;
`

export const InputBox:React.FC<InputBoxProps> = ({width, height, mh, placeholder, setContent}) => {
  return <Input 
          width={width} 
          height={height} 
          mh={mh}
          placeholder={placeholder}
          onChange={(e)=>setContent(e.target.value)}/>
}