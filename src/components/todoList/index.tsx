import React, { useEffect, useState } from 'react'
import { MAIN } from '../../layouts/main'
import { TH } from './styles'
import { InputBox } from '../../function/input'
import { FaList, FaAlignJustify, FaTrash } from 'react-icons/fa';
import { FaPlus, FaPencil } from 'react-icons/fa6'
import { filterText } from '../../constants/Text/ToDoList';
import { LookBox } from './lookBox';
import { FilterDisplay } from './type'
import { ListCreate, ListDelete } from '../../function/localStorage/List';
import { useAtom } from 'jotai';
import { listAtom, listCRUDModalAtom } from '../../store/todoList';
import { LookList } from './type';

const Index = () => {

  const [filterDisplay, setFilterDisplay] = useState<FilterDisplay>({
    filter: false,
    plus: false,
    lookBox: false,
  });

  const [content, setContent] = useState<string>(); // add 내용

  const [list, setList] = useAtom(listAtom);
  const [lookList, setLookList] = useState<object[]>();
  const [lookListBb, setLookListBb] = useState<Boolean[]>([true, ...Array(lookList?.length).fill(false)]);
  const [listCRUDModal, setListCRUDModal] = useAtom(listCRUDModalAtom);

  useEffect(()=>{
    setList(JSON.parse(localStorage.getItem('list')));
    setLookList(JSON.parse(localStorage.getItem('lookList')));
  }, []);

  return (
    <MAIN.Container>
      <MAIN.SubContainer>
        <TH.Header>
          <div>To Do List</div>
        </TH.Header>
        <TH.Main>
          <div className='flex items-center justify-center'>
            <InputBox width={"300px"} height={40} mh={20} setContent={setContent} />
            <div className='ml-5 border p-2 rounded-full cursor-pointer bg-lime-200'>
              <FaPlus onClick={()=>ListCreate(content, setList)} />
            </div>
          </div>

          <div className={'flex text-xs relative' + (lookList ? 'py-0' : 'py-2')}
            onMouseEnter={()=>setFilterDisplay({...filterDisplay, plus: true})}
            onMouseLeave={()=>setFilterDisplay({...filterDisplay, plus: false})}>
            {filterDisplay.lookBox && <LookBox top={36} bottom={0} filterDisplay={filterDisplay} setFilterDisplay={setFilterDisplay} lookList={lookList} setLookList={setLookList}/>}
            <div className='flex items-center'>
              {lookList && <div className='flex items-center rounded cursor-pointer'>
                {lookList.map((x:LookList, index)=>{
                  return <div key={x.id} className={'px-1 py-1 border-b-4' + (lookListBb[index] ? ' border-lime-200' : ' border-gray-100')}
                            onClick={()=>{
                              const array = Array(lookList?.length).fill(false);
                              array[index] = true;
                              setLookListBb(array);
                            }}>{x.title}</div>
                })}
              </div>}
              {filterDisplay.plus && <FaPlus className='cursor-pointer ml-1' 
                onClick={()=>setFilterDisplay({...filterDisplay, lookBox: !filterDisplay.lookBox})} />}
            </div>
            <div className='flex-1 flex items-center justify-end'>
              <div className='mr-2 cursor-pointer'>편집</div>
              <FaAlignJustify className='cursor-pointer' 
                onClick={()=>setFilterDisplay({...filterDisplay, filter: !filterDisplay.filter})}>필터
              </FaAlignJustify>
            </div>
          </div>

          <div className='flex my-2'>
            {filterText.map(x => {
              return(
                <div key={x.id} className={'px-4 py-2 mr-2 text-xs border rounded-lg cursor-pointer hover:bg-lime-200' + (filterDisplay.filter ? ' block' : ' hidden')}>{x.title}</div>
              )
            })}
          </div>
          
          <div className='py-2 overflow-y-scroll h-full flex-1'>
            {list?.map((x, index) => {
              return (
                <div className='flex items-center px-5 h-20 mb-4 border rounded-lg'>
                  <div className='rounded-sm w-4 h-4 bg-lime-200 mr-2'></div>
                  <div>{x.title}</div>
                  <div className='flex justify-end flex-1'>
                    <FaPencil className='rounded-sm mr-4 cursor-pointer'
                      onClick={()=>setListCRUDModal({open: true, index: index, type: "update", listData: x, buttonText: "수정하기", nextFunc: setList})}/>
                    <FaTrash className='rounded-sm cursor-pointer' 
                      onClick={()=>setListCRUDModal({open: true, type: "delete", listData: x, mainText: "정말로 삭제하시겠습니까?", buttonText: "삭제하기", nextFunc: ()=>ListDelete(index, setList)})} />
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