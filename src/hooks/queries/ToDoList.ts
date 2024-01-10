import { useQuery, useMutation } from "react-query";
import { getList, postWrite, postDelete, postModify } from "../../service/ToDoList";

const ACCOUNT_KEYS = {

  list: "list",

}

/**
 * 리스트
 * 
 */
export const useListQuery = () => {
  return useQuery(ACCOUNT_KEYS.list, async () => {
    const { data } = await getList();
    return data;
  }, {

  });
}

/**
 * 글 작성
 * 
 */
export const useWriteMutation = () =>
  useMutation({
    mutationFn: (params: object) => {
      return postWrite(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

/**
 * 글 삭제
 * 
 */
export const useDeleteMutation = () =>
  useMutation({
    mutationFn: (params: object) => {
      return postDelete(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

  /**
 * 글 수정
 * 
 */
export const useModifyMutation = () =>
useMutation({
  mutationFn: (params: object) => {
    return postModify(params);
  },
  onSuccess: () => {
    // 성공 시 실행할 로직 추가
  }
});