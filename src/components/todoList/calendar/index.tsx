import React, { useState } from 'react'
import { addMonths, subMonths } from 'date-fns'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { week } from '../../../constants/Text/ToDoList';

const Index = () => {

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const today = {
    year: new Date().getFullYear(), //오늘 연도
    month: new Date().getMonth() + 1, //오늘 월
    date: new Date().getDate(), //오늘 날짜
    day: new Date().getDay(), //오늘 요일
  };

  const [selectedYear, setSelectedYear] = useState(today.year); // 현재 선택된 연도
  const [selectedMonth, setSelectedMonth] = useState(today.month); // 현재 선택된 달
  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate(); // 선택된 연도, 달의 마지막 날짜
  const curMonthStartDate = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const prevMonthEndDate = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    0
  ).getDate();

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  }

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  }

  return (
    <div className='w-full text-xs'>
      <div className='flex items-center'>
        <div className='font-bold my-4 flex-1'>{currentMonth.getFullYear()}년 {currentMonth.getMonth()+1}월</div>
        <FaAngleLeft className='cursor-pointer' onClick={prevMonth}/>
        <div className='px-2'>오늘</div>
        <FaAngleRight className='cursor-pointer' onClick={nextMonth}/>
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
      <div className='flex flex-wrap'>
        {Array.from({ length: 42 }).map((x, index) => {
          let curr = index - curMonthStartDate + 1;
          let prev = prevMonthEndDate - curMonthStartDate + index + 1;
          let next = curr - dateTotalCount;
          return (
            <div key={index} className='border-2 flex h-24' style={{ width: '14.28%' }}>{curMonthStartDate > index ? prev :  dateTotalCount < curr ? next : curr}</div>
          )
        })}
      </div>
    </div>
  )
}

export default Index