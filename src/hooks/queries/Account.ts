import { useQuery, useMutation } from "react-query";
import { getIdCheck, postSignup, postLogin } from "../../service/Account";

const ACCOUNT_KEYS = {

  idCheck: "idCheck",

  login: "login",
}

/**
 * 회원가입
 * 
 */
export const useSignupMutation = () =>
  useMutation({
    mutationFn: (params: Object) => {
      console.log("params: ", params);
      return postSignup(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

/**
 * 중복 아이디 찾기
 * 
 */
export const useIdCheckQuery = (params: Object) => {
  return useQuery(ACCOUNT_KEYS.idCheck, async () => {
    const { data } = await getIdCheck(params);
    return data;
  });
}

/**
 * 로그인
 * 
 */
export const useLoginMutation = () =>
  useMutation({
    mutationFn: (params: Object) => {
      console.log("params: ", params);
      return postLogin(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });