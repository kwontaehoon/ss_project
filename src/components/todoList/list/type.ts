import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "react-query";

type CustomRefetchFunction<TPageData> = (options?: RefetchOptions & RefetchQueryFilters<TPageData>) => Promise<QueryObserverResult<any, unknown>>;

export interface listProps {
  list: object[];
  refetch: CustomRefetchFunction<object>;
}