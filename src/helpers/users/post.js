import axios from "axios";

const url = import.meta.env.VITE_USERS;

export const postUser = async (data) => {
  return (await axios.post(url, data)).data;
};
