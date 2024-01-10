export interface ListType {
    id: number;
    title: number | string;
    date: Date;
  }
  
export interface CalendarProps {
    list: ListType[]; // Test 인터페이스를 활용하여 list 배열의 타입을 정의
  }