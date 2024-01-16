import { client } from ".";

const ACCOUNT_URL = {

    // 리스트
    list: "/list",

    // 글 작성
    write: "/write",

    // 글 삭제
    delete: "/delete",
    
    // 글 수정
    modify: "/modify",

    // 글 완료
    finish: "/finish",
}

/**
 * 리스트
 * 
 */
export const getList = () => client.get(ACCOUNT_URL.list);

/**
 * 글 작성
 * 
 */
export const postWrite = (params:object) => client.post(ACCOUNT_URL.write, params);

/**
 * 글 삭제
 * 
 */
export const postDelete = (params:object) => client.post(ACCOUNT_URL.delete, params);

/**
 * 글 수정
 * 
 */
export const postModify = (params:object) => client.post(ACCOUNT_URL.modify, params);

/**
 * 글 수정
 * 
 */
export const postFinish = (params:object) => client.post(ACCOUNT_URL.finish, params);