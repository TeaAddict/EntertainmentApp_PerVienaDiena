import axios from "axios";

const url = import.meta.env.VITE_USERS;

export const getUser = async (id) => {
  const response = await axios.get(`${url}/${id}`);
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get(url);
  return response.data;
};
