import axios from "axios";

const url = import.meta.env.VITE_MOVIES;

export const postMovie = async (data) => {
  console.log(url);
  return (await axios.post(url, data)).data;
};
