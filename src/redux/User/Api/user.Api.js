import axios from "axios";
import { API_PATH } from "../../../Config";
export const getUserApi = () => {
  return axios.get(API_PATH.user.get_Api);
};
export const addUserApi = (data) => {
  return axios.post(API_PATH.user.post_API, data);
};
