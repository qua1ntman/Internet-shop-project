import axios from "axios";

const url = process.env.SERVER_URL;

export const getCategories = async () => {
  return axios.get(`${url}/category`);
};

export const getSubcategory = async (id: number) => {
  return axios.get(`${url}/subcategory/${id}`)
};

export const getProduct = async () => {
  return axios.get(`${url}/product`)
};
