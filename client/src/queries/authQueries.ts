import axios from 'axios';
import { TFormState } from '../types/defaultObjType';

const url = process.env.SERVER_URL;

export const postRegister = (data: TFormState) => {
  return axios.post(`${url}/user/register`, data)   
}

export const postLogin = (data: TFormState) => {
  return axios.post(`${url}/user/login`, data)   
}

export const getTelegramCode = () => {
  return axios.post(`${url}/user/bot`, {}, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token') || null}` } })
}