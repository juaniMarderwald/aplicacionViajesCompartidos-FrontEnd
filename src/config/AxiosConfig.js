import Axios from "axios";

export const initAxios = () => {
  Axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;

  const responseHandler = (response) => {
    const { data } = response;
    return data;
  };
  
  Axios.interceptors.response.use(responseHandler);
};
