import { client } from ".";

const ACCOUNT_URL = {
    // 회원가입
    signup: "/signup",
}

export const postSignup = (params:Object) => client.post(ACCOUNT_URL.signup, params);