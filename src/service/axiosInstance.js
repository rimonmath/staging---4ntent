import axios from 'axios';

let apiBaseUrl = 'http://localhost:8080/api/';

export const axiosPrivate = axios.create ({
  baseURL: apiBaseUrl,
  timeout: 60000,
  // headers: {'X-Custom-Header': 'foobar'}
});

// export const axiosPublic = axios.create({
//   baseURL: apiBaseUrl + "public/",
//   timeout: 60000
//   // headers: {'X-Custom-Header': 'foobar'}
// });
