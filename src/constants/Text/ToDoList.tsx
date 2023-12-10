const day = () => {
    switch(new Date().getDay()){
        case 0: return "일";
        case 1: return "월";
        case 2: return "화";
        case 3: return "수";
        case 4: return "목";
        case 5: return "금";
        case 6: return "토";
    }
}

export const filterText = [
    {id: 1, title: '미완료 순'},
    {id: 2, title: '완료 순'},
    {id: 3, title: '날짜 순'}
];

export const lookListText = [
    {id: 1, title: '리스트'},
    {id: 2, title: '보드'},
    {id: 3, title: '캘린더'}
];

export const lookListEditText = [
    {id: 1, title: "정렬"},
    {id: 2, title: "이름 변경"},
    {id: 3, title: "보기 복제"},
    {id: 4, title: "보기 삭제"}
];

export const week = ["일", "월", "화", "수", "목", "금", "토"];

export const today = {
    year: new Date().getFullYear(), //오늘 연도
    month: new Date().getMonth() + 1, //오늘 월
    date: new Date().getDate(), //오늘 날짜
    day: day, //오늘 요일
  };