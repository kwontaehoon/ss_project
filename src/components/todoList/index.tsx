import React, { useState } from 'react'
import { MAIN } from '../../layouts/main'
import { TH } from './styles'
import { InputBox } from '../../function/input'
import { FaList, FaAlignJustify, FaTrash } from 'react-icons/fa';
import { FaPlus, FaPencil } from 'react-icons/fa6'
import { filterText } from '../../constants/Text/ToDoList';
import { LookBox } from '../../layouts/todoList/LookBox';
import { listAtom } from '../../store/todoList';
import { useAtom } from 'jotai';
import { FilterDisplay } from './type'

const Index = () => {

  const [filterDisplay, setFilterDisplay] = useState<FilterDisplay>({
    filter: false,
    plus: false,
    lookBox: false,
  });

  const [content, setContent] = useState<string>(); // add 내용
  console.log('content: ', content);

  const [list, setList] = useAtom(listAtom);
  console.log('list: ', list);

  return (
    <MAIN.Container>
      <MAIN.SubContainer>
        <TH.Header>
          <div>To Do List</div>
        </TH.Header>
        <TH.Main>
          <div className='flex items-center justify-center'>
            <InputBox width={300} height={40} mh={20} setContent={setContent} />
            <div className='ml-5 border p-2 rounded-full cursor-pointer bg-lime-200'>
              <FaPlus onClick={()=>setList([...list, {id: 2, title: content }])} />
            </div>
          </div>

          <div className='flex text-sm my-2 relative border-b py-1'
            onMouseEnter={()=>setFilterDisplay({...filterDisplay, plus: true})}
            onMouseLeave={()=>setFilterDisplay({...filterDisplay, plus: false})}>
            {filterDisplay.lookBox && <LookBox top={36} bottom={0} filterDisplay={filterDisplay} setFilterDisplay={setFilterDisplay}/>}
            <div className='flex items-center'>
              <div className='flex items-center p-1 rounded hover:bg-lime-200 cursor-pointer'>
                <FaList/>
                <div className='mx-1'>리스트</div>
              </div>
              {filterDisplay.plus && <FaPlus className='cursor-pointer ml-1' 
                onClick={()=>setFilterDisplay({...filterDisplay, lookBox: !filterDisplay.lookBox})} />}
            </div>
            <div className='flex-1 flex items-center justify-end'>
              <FaAlignJustify className='cursor-pointer' 
                onClick={()=>setFilterDisplay({...filterDisplay, filter: !filterDisplay.filter})}>필터
              </FaAlignJustify>
            </div>
          </div>

          <div className='flex mb-2'>
            {filterText.map(x => {
              return(
                <div key={x.id} className={'px-4 py-2 mr-2 text-xs border rounded-lg cursor-pointer hover:bg-lime-200' + (filterDisplay.filter ? ' block' : ' hidden')}>{x.title}</div>
              )
            })}
          </div>
          
          <div className='py-2 overflow-y-scroll h-full flex-1'>
            {list.map(x => {
              return (
                <div className='flex items-center px-5 h-20 mb-4 border rounded-lg'>
                  <div className='rounded-sm w-4 h-4 bg-lime-200 mr-2'></div>
                  <div>{x.title}</div>
                  <div className='flex justify-end flex-1'>
                    <FaPencil className='rounded-sm mr-4 cursor-pointer' />
                    <FaTrash className='rounded-sm cursor-pointer' />
                  </div>
                </div>
              )
            })}
          </div>
        </TH.Main>
        <TH.Footer>
            footer
        </TH.Footer>
      </MAIN.SubContainer>
    </MAIN.Container>
  )
}

export default Index