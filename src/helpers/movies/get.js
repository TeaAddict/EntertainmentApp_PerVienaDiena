import axios from "axios";

const url = import.meta.env.VITE_MOVIES;

export const getMovies = async () => {
  return (await axios.get(url)).data;
};

export const getMovie = async (id) => {
  return (await axios.get(`${url}/${id}`)).data;
};
