import axios from "axios";
axios.defaults.baseURL = "https://developers.lingvolive.com/api";

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
// // const BASE_PATCH = 'https://developers.lingvolive.com/api/v1';
// const TOKEN ="ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmxlSEFpT2pFMk9EWTVNemt6TlRNc0lrMXZaR1ZzSWpwN0lrTm9ZWEpoWTNSbGNuTlFaWEpFWVhraU9qVXdNREF3TENKVmMyVnlTV1FpT2pnNE1ETXNJbFZ1YVhGMVpVbGtJam9pWkdGbFpXWXpPRGd0TlRZMk9DMDBOemRtTFdJMFlqa3RNREEwWkRSbVkySmtOekl5SW4xOS5JNUFYOUpRdzRZLUZ0dzFyZjlTdTRySko5OW5RamRGcWMzdlNvaDlsdlQ4";
// // WordList?prefix=каз&srcLang=1058&dstLang=1058&pageSize=20
// const instance = axios.create({
//   baseURL: "https://developers.lingvolive.com/api/v1",
// });

// instance.interceptors.request.use(
//   (config) => {
//     // const { token } = store.state.auth;

//     if (TOKEN) {
//       config.headers.Authorization = `Bearer ${TOKEN}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );


const getWordList = async (word) => {
  const token = await axios.post('/v1.1/authenticate', {}, {
    headers: {
      Authorization: "Basic ZGFlZWYzODgtNTY2OC00NzdmLWI0YjktMDA0ZDRmY2JkNzIyOmQyNGE4MDQzZDlkMjQ0NThiNjA1OWUyNjk1NWFmN2Jk",
      "Content-Type": "application/json",
    },
  });

  console.log(token);
  // setAuthHeader(token);
  // // console.log(word);
  // const response = await axios.get("/v1/WordList", {
  //   params: {
  //     prefix: word,
  //     srcLang: 1058,
  //     dstLang: 1058,
  //     pageSize: 10,
  //   },
  // });
// console.log(response);  
// return response ;

};

// https://developers.lingvolive.com/api/v1 /WordList?prefix=%D0%BA%D0%B0%D0%B7&srcLang=1058&dstLang=1058&pageSize=10
// export function getWordList(name) {
//   return fetch(
//     `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages,area`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
export default getWordList;
