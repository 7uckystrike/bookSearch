import axios from "axios";

const Kakao = axios.create({
  baseURL: 'https://dapi.kakao.com',
  headers: {
    Authorization: 'KakaoAK 802cbf2611612600541f98020397dca2',
  },
});

// search blog api
export const blogSearch = params => {
  return Kakao.get("/v3/search/book", { params });
};
