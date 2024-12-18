import axios from "axios";

const url = import.meta.env.VITE_MOVIES;

export const deleteMovie = async (id, data) => {
  return (await axios.delete(`${url}/${id}`, data)).data;
};
