import axios from "axios";

const { REACT_APP_API_KEY } = process.env;
// const API_KEY = `key=${REACT_APP_API_KEY}`;
// const LANGUAGE = `langRestrict=${i18n.language}`;

const api = axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `${REACT_APP_API_KEY}`,
  },
});

export default api;