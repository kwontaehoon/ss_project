import React, { useEffect, useState } from 'react'
import { addMonths, subMonths } from 'date-fns'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { week } from '../../../constants/Text/ToDoList';
import { CalendarProps } from './type'
import { useNavigate } from 'react-router-dom';

const Index: React.FC<CalendarProps> = ({ list }) => {

  console.log("calendar 실행");
  const navigate = useNavigate();
  const [current, setCurrent] = useState(new Date());
  const [calendarList, setCalendarList] = useState([]);

  const today = {
    year: new Date().getFullYear(), //오늘 연도
    month: new Date().getMonth() + 1, //오늘 월
    date: new Date().getDate(), //오늘 날짜
    day: new Date().getDay(), //오늘 요일
  };

  useEffect(() => {
    setCalendarList(list.filter(x => new Date(x.date).getFullYear() == current.getFullYear() && new Date(x.date).getMonth() == current.getMonth()));
  }, [list, current]);

  const [selectedYear, setSelectedYear] = useState(today.year); // 현재 선택된 연도
  const [selectedMonth, setSelectedMonth] = useState(today.month); // 현재 선택된 달
  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate(); // 선택된 연도, 달의 마지막 날짜
  const curMonthStartDate = new Date(
    current.getFullYear(),
    current.getMonth(),
    1
  ).getDay();

  const prevMonthEndDate = new Date(
    current.getFullYear(),
    current.getMonth(),
    0
  ).getDate();

  const prevMonth = () => {
    setCurrent(subMonths(current, 1));
  }

  const nextMonth = () => {
    setCurrent(addMonths(current, 1));
  }

  return (
    <div className='w-full text-xs'>
      <div className='flex items-center'>
        <div className='font-bold mb-2 flex-1'>{current.getFullYear()}년 {current.getMonth() + 1}월</div>
        <FaAngleLeft className='cursor-pointer' onClick={prevMonth} />
        <div className='px-2'>오늘</div>
        <FaAngleRight className='cursor-pointer' onClick={nextMonth} />
      </div>
      <div className='flex my-1'>
        {week.map((x, index) => {
          return (
            <div key={index} className='flex-1 mb-2'>
              <div className='flex justify-center'>{x}</div>
            </div>
          )
        })}
      </div>
      <div className='flex flex-wrap bg-gray-100'>
        {Array.from({ length: 42 }).map((x, index) => {
          let curr = index - curMonthStartDate + 1;
          let prev = prevMonthEndDate - curMonthStartDate + index + 1;
          let next = curr - dateTotalCount;

          return (
            <div className='py-2' style={{ width: '14.28%' }}>
              <div key={index} className='bg-lime-200 h-4 mx-1 rounded-br-xl rounded-tl-xl pl-2'>{curMonthStartDate > index ? prev : dateTotalCount < curr ? next : curr}</div>
              <div className='bg-white m-1 p-1 h-20 rounded-tr-xl rounded-bl-xl'>
                {calendarList.map(y => {
                  if (index == new Date(y.date).getDate() + curMonthStartDate - 1)
                    return (
                      <div className='truncate' onClick={()=>navigate(`${y.id}`)}>{y.title}</div>
                    )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Index