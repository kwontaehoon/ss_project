type ListType = {
  state: string;
  message: string;
  data: [{
    id: number;
    title: string;
    userId: string;
    date: Date;
  }];
}

export interface ListProps {
  list: ListType;
}