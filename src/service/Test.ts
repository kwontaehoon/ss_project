import { client } from ".";


const ACCOUNT_URL = {
    // 테스트
    test: "",
}

export const getTest = () => client.get(ACCOUNT_URL.test);