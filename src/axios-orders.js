import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-recipes-4a902.firebaseio.com/"
});

export default instance;
