import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
  headers: {
    "x-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Credentials": true,
    // 'Content-Type': 'multipart/form-data',
    // "Access-Control-Allow-Origin": "*",
  },
  responseType: "json", // 옵션: 'qrraybuffer', 'document' ...
  responseEncoding: "utf8", // 클라이언트 사이드 요청
  decompress: true,
  withCredentials: true, // cors
});
