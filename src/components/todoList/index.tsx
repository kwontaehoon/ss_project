import React, { useState, useEffect } from 'react'
import List from './list/index'
import Board from './board'
import Calenar from './calendar'
import { TH } from './styles'
import { FaAlignJustify, FaPlus } from 'react-icons/fa'
import { LookBox } from './lookBox'
import { useAtom } from 'jotai'
import { listAtom, lookListEditModalAtom } from '../../store/todoList'
import { InputBox } from '../../function/input'
import { ListCreate } from '../../function/localStorage/List'
import { filterText } from '../../constants/Text/ToDoList'

const Index = () => {

    interface FilterDisplay {
        filter: boolean;
        plus: boolean,
        lookBox: boolean
    };

    interface LookList {
        id: number,
        title: string | number;
    }
    const [filterDisplay, setFilterDisplay] = useState<FilterDisplay>({
        filter: false,
        plus: false,
        lookBox: false,
    });

    const [list, setList] = useAtom(listAtom);
    const [content, setContent] = useState<string>(); // add 내용
    const [lookList, setLookList] = useState<LookList[]>();
    const [lookListBb, setLookListBb] = useState<Boolean[]>([true, ...Array(lookList?.length).fill(false)]);
    const [lookListEditModal, setLookListEditModal] = useAtom(lookListEditModalAtom);

    useEffect(() => {
        setLookList(JSON.parse(localStorage.getItem('lookList')));
    }, []);

    return (
        <TH.Container>
            <TH.Header>
                <div>To Do List</div>
            </TH.Header>

            <TH.Main>
                <div className='flex items-center justify-center'>
                    <InputBox width={"300px"} height={40} mh={20} setContent={setContent} />
                    <div className='ml-5 border p-2 rounded-full cursor-pointer bg-lime-200'>
                        <FaPlus onClick={() => ListCreate(content, setList)} />
                    </div>
                </div>

                <div className={'flex text-xs relative border' + (lookList ? 'py-0' : 'py-2')}
                    onMouseEnter={() => setFilterDisplay({ ...filterDisplay, plus: true })}
                    onMouseLeave={() => setFilterDisplay({ ...filterDisplay, plus: false })}>
                    {filterDisplay.lookBox && <LookBox top={36} bottom={0} filterDisplay={filterDisplay} setFilterDisplay={setFilterDisplay} lookList={lookList} setLookList={setLookList} />}
                    <div className='flex items-center'>
                        {lookList && <div className='flex items-center rounded cursor-pointer'>
                            {lookList.map((x: LookList, index) => {
                                return <div key={x.id} className={'px-1 py-1 border-b-4' + (lookListBb[index] ? ' border-lime-200' : ' border-gray-100')}
                                    onClick={() => {
                                        const array = Array(lookList?.length).fill(false);
                                        array[index] = true;
                                        setLookListBb(array);
                                    }}>{x.title}</div>
                            })}
                        </div>}
                        {filterDisplay.plus && <FaPlus className='cursor-pointer ml-1'
                            onClick={() => setFilterDisplay({ ...filterDisplay, lookBox: !filterDisplay.lookBox })} />}
                    </div>

                    <div className='flex-1 flex items-center justify-end'>
                        <div className='mr-2 cursor-pointer' onClick={() => setLookListEditModal({ open: true })}>편집</div>
                        <FaAlignJustify className='cursor-pointer'
                            onClick={() => setFilterDisplay({ ...filterDisplay, filter: !filterDisplay.filter })}>필터
                        </FaAlignJustify>
                    </div>
                </div>
                <div className='flex my-2'>
                    {filterText.map(x => {
                        return (
                            <div key={x.id} className={'px-4 py-2 mr-2 text-xs border rounded-lg cursor-pointer hover:bg-lime-200' + (filterDisplay.filter ? ' block' : ' hidden')}>{x.title}</div>
                        )
                    })}
                </div>

                {lookList && lookList[lookListBb.findIndex(x => x)].title == '리스트' && <List list={list} setList={setList} />}
                {lookList && lookList[lookListBb.findIndex(x => x)].title == '캘린더' && <Calenar list={list} setList={setList} />}
            </TH.Main>
            <TH.Footer>
                footer
            </TH.Footer>
        </TH.Container>
    )
}

export default Index