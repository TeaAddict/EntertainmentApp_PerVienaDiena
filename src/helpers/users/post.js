import axios from "axios";

const url = import.meta.env.VITE_USERS;

export const postUser = async (data) => {
  return (await axios.post(url, data)).data;
};

export const updateUser = async (id, data) => {
  return (await axios.patch(`${url}/${id}`, data)).data;
};
