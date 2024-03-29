import { useQuery, useMutation } from "react-query";
import { postIdCheck, postSignup, postLogin, postIdSearch, postPwdSearch } from "../../service/Account";

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
    const { data } = await postIdCheck(params);
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
      return postLogin(params);
    },
    onSuccess: () => {
      // 성공 시 실행할 로직 추가
    }
  });

/**
 * 아이디 찾기
 * 
 */
export const useIdSearchMutation = () =>
  useMutation({
    mutationFn: (params: Object) => {
      return postIdSearch(params);
    },
    onSuccess: () => {
    }
  });

/**
 * 비밀번호 찾기
 * 
 */
export const usePwdSearchMutation = () =>
  useMutation({
    mutationFn: (params: Object) => {
      return postPwdSearch(params);
    },
    onSuccess: () => {
    }
  });