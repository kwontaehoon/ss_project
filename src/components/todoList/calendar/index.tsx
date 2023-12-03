import React, { useState } from 'react'
import { format, addMonths, subMonths } from 'date-fns'

const Index = () => {

  const days = [];

  const [currentMonth, setCurrentMOnth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const today = {
    year: new Date().getFullYear(), //오늘 연도
    month: new Date().getMonth() + 1, //오늘 월
    date: new Date().getDate(), //오늘 날짜
    day: new Date().getDay(), //오늘 요일
  };
  const week = ["일", "월", "화", "수", "목", "금", "토"]; // 일주일
  const [selectedYear, setSelectedYear] = useState(today.year); // 현재 선택된 연도
  const [selectedMonth, setSelectedMonth] = useState(today.month); // 현재 선택된 달
  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate(); // 선택된 연도, 달의 마지막 날짜

  console.log(selectedYear);
  console.log(selectedMonth);
  console.log(dateTotalCount);

  const prevMonth = () => {
    setCurrentMOnth(subMonths(currentMonth, 1));
  }

  const nextMonth = () => {
    setCurrentMOnth(addMonths(currentMonth, 1));
  }

  return (
    <div className='border w-full text-xs'>
      <div className='flex my-1'>
        {week.map((x, index)=>{
          return(
            <div key={index} className='flex-1 rounded-lg px-1'>
              <div className='bg-lime-200 flex justify-center'>{x}</div>
            </div>
          )
        })}
      </div>
      <div className='flex flex-wrap'>
        {Array.from({length: new Date(selectedYear, selectedMonth, 0).getDate()}).map((x, index)=>{
          return(
            <div key={index} className='border-2 flex h-16' style={{width: '14.28%'}}>hi</div>
          )
        })}
      </div>
    </div>
  )
}

export default Index