import Axios from "axios";

export class UserService {
  async getUser(token) {
    try {
      // const response = await Axios.post(`/getUser`, { data: token });
      // return response.data
      return {
        id: "21681",
        type: 1,
        email: "ayrtonsena@gmail.com",
        name: "Ayrton",
        lastName: "Sena",
      };
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}
