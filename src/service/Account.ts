import { client } from ".";

const ACCOUNT_URL = {
    // 회원가입
    signup: "/test",
}

export const postSignup = (params:Object) => client.post(ACCOUNT_URL.signup, params);