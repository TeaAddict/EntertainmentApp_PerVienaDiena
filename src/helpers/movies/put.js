import axios from "axios";

const url = import.meta.env.VITE_MOVIES;

export const updateMovie = async (id, data) => {
  return (await axios.patch(`${url}/${id}`, data)).data;
};


