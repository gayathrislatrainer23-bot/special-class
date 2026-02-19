const api = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,

});

api.interceptors.request.use(
  function (config) {
const token = localStorage.getItem('token')
if(token){
 config.headers.autherization = `Bearer ${token}`
}
    return config;
  },
  function (error) {
    // Do something with the request error
    return Promise.reject(error);
  },
);

export default api