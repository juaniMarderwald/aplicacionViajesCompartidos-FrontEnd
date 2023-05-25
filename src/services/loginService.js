import Axios from "axios";

export class LoginService {
  async login(credentials) {
    try {
      // const response = await Axios.post(`/login`, { data: credentials });
      // return response.data;
      return { ...credentials, token: "uloshjklas213q5niem" };
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async register(credentials) {
    try {
      const response = await Axios.post(`/register`, { data: credentials });
      return response.data;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}
