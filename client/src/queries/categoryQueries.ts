import axios from "axios";

const url = process.env.SERVER_URL;

export const getCategories = async () => {
  return axios.get(`${url}/category`);
};

export const getSubcategory = async (id: number) => {
  return axios.get(`${url}/subcategory/${id}`)
};

export const getProduct = async () => {
  console.log(process.env.SERVER_URL);
  axios
    .get(`${url}/product`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((e: Error) => {
      console.log(e.message);
    })
    .finally(() => {
      console.log("finally");
    });
};
