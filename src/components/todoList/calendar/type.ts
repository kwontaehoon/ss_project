export interface ListType {
    id: number;
    title: number | string;
    date: Date;
  }
  
export interface CalendarProps {
    list: ListType[]; // Test 인터페이스를 활용하여 list 배열의 타입을 정의
    setList: React.Dispatch<React.SetStateAction<ListType[]>>; // setList 함수의 인자 타입도 업데이트
  }