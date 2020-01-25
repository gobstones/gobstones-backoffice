export default (axios) => {
  axios.interceptors.response.use(
    (response) => response.data,
    (error) => {
      const response = error.response;
      if (!response) return Promise.reject("no-response");

      return Promise.reject(response && response.data ? response.data : error);
    }
  );

  return axios;
};
