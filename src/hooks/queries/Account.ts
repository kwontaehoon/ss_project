import { useQuery, useMutation } from "react-query";
import { postSignup } from "../../service/Account";

const ACCOUNT_KEYS = {
  
}

export const useSignupQuery = () =>
  useMutation({
    mutationFn: (params: Object) => {
      console.log("params: ", params);
      return postSignup(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });
