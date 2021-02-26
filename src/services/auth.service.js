import axios from 'axios';

const API_URL = "http://localhost:3000/";

const register = (email, password) => {
  return axios.post(API_URL + "signup", {
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const updateUser = (email, password) => {
  return axios
    .put(API_URL + 'user/:userId', {
      email, 
      password
    })
}

export default { register, login, logout, updateUser };
