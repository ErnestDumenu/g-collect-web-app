import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  postMakeOrder(type){
    return axios.post(API_URL + 'user/order',{headers: authHeader(),
      type });

  }

  getAllReceipts(){
    return axios.get(API_URL + 'user/order',{headers: authHeader(),
    status: "Completed" });

  }

  getOneReceipt(){
    return axios.get(API_URL + 'user/order',{
      headers: authHeader(),
      status:"Completed" });

  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();