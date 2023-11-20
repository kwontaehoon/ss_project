import React, { useState } from 'react'
import { MAIN } from '../../layouts/main'
import { TH } from './styles'
import { InputBox } from '../../function/input'
import { FaList, FaAlignJustify } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6'

const Index = () => {

  interface FilterDisplay { 
    filter: boolean; plus: boolean
  };

  const [filterDisplay, setFilterDisplay] = useState<FilterDisplay>({
    filter: false,
    plus: false
  });

  const filterFunc = () => {
    setFilterDisplay({...filterDisplay, filter: !filterDisplay.filter});
  }
  
  const content = [
    '타입스크립트 공부하기', 'fwefew', '블로그 작성하기', '타입스크립트 프로젝트 만들기', '던모 레이드돌기'
  ]
  return (
    <MAIN.Container>
      <MAIN.SubContainer>
        <TH.Header>
          <div>To Do List</div>
        </TH.Header>
        <TH.Main>
          <div className='border flex items-center justify-center'>
            <InputBox width={250} height={40} mh={20} />
            <div className='ml-5 border p-2 rounded-full'>
              <FaPlus />
            </div>
          </div>

          <div className='border flex text-sm'
            onMouseEnter={()=>setFilterDisplay({...filterDisplay, plus: true})}
            onMouseLeave={()=>setFilterDisplay({...filterDisplay, plus: false})}>
            <div className='flex-1 border flex items-center'>
              <FaList/>
              <div className='mx-1'>리스트</div>
              {filterDisplay.plus && <FaPlus className='cursor-pointer' />}
            </div>
            <div className='flex-1 flex items-center justify-end'>
              <FaAlignJustify className='cursor-pointer' onClick={filterFunc}>필터</FaAlignJustify>
            </div>
          </div>

          <div className={'py-2' + (filterDisplay.filter ? ' block' : ' hidden')}>오늘할 일</div>

          <div className='py-2 overflow-y-scroll h-full flex-1'>
            {content.map((x, index) => {
              return (
                <div className='flex items-center px-5 h-20 mb-4 border bg-gray-200 rounded-lg'>
                  <div className='rounded-sm w-4 h-4 bg-orange-600 mr-2'></div>
                  <div className='bg-slate-100 border'>{x}</div>
                  <div className='flex justify-end flex-1'>
                    <div className='rounded-sm w-4 h-4 border mr-2'></div>
                    <div className='rounded-sm w-4 h-4 border'></div>
                  </div>
                </div>
              )
            })}
          </div>
        </TH.Main>
        <TH.Footer>

        </TH.Footer>
      </MAIN.SubContainer>
    </MAIN.Container>
  )
}

export default Index