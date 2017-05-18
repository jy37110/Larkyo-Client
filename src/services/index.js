import axios from 'axios';
import {UserSerivce} from './UserService';
import {AuthenticationService} from './AuthenticationService'


axios.defaults.baseURL = 'http://localhost:31460/api';

export const userSerivce = new UserSerivce();
export const authService = new AuthenticationService();

export function setToken(access_token){
  localStorage.setItem('passport', access_token);
  axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('passport');
}
export function clearToken(){
  axios.defaults.headers.common['Authorization'] = "";
  localStorage.clear();
}
