import { client } from ".";

const ACCOUNT_URL = {

    // 회원가입
    signup: "/signup",

    // 중복된 아이디 찾기
    idCheck: "/idCheck",

    // 로그인
    login: "/login",
}

/**
 * 회원가입
 * 
 */
export const postSignup = (params:Object) => client.post(ACCOUNT_URL.signup, params);

/**
 * 중복 아이디 찾기
 * 
 */
export const getIdCheck = (params:Object) => client.get(ACCOUNT_URL.idCheck, { params: params });

/**
 * 로그인
 * 
 */
export const postLogin = (params:Object) => client.post(ACCOUNT_URL.login, params);