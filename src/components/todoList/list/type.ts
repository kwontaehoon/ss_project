import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "react-query";

type CustomRefetchFunction<TPageData> = (options?: RefetchOptions & RefetchQueryFilters<TPageData>) => Promise<QueryObserverResult<any, unknown>>;

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
  refetch: CustomRefetchFunction<object>;
}