import { useQuery, useMutation } from "react-query";
import { postSignup } from "../../service/Account";

const ACCOUNT_KEYS = {
  
}

export const useSignupQuery = () =>
  useMutation({
    mutationFn: (params:Object) => {
      return postSignup(params);
    },
    onSuccess: () => {
      
    }
  });