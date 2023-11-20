import React from 'react'
import { MAIN } from '../../layouts/main'
import { TH } from './styles'
import { InputBox } from '../../function/input'

const index = () => {
  return (
    <MAIN.Container>
      <MAIN.SubContainer>
        <TH.Header>
          <div>To Do List</div>
        </TH.Header>
        <TH.Main>
          <div className='border flex items-center justify-center'>
            <InputBox width={250} height={40} mh={20} />
            <div className='ml-5 border p-2 rounded-full bg-yellow-900'></div>
          </div>

          <div className='border flex'>
            <div className='flex-1 border flex'>
              <div>리스트</div>
              <div>+</div>
            </div>
            <div className='flex-1 flex justify-end'>
              <div>필터</div>
            </div>
          </div>

          <div className='border overflow-y-scroll'>
            <div>gg</div>
            <div>gg</div>
            <div>gg</div>
          </div>
        </TH.Main>
        <TH.Footer>

        </TH.Footer>
      </MAIN.SubContainer>
    </MAIN.Container>
  )
}

export default index