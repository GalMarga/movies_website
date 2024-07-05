//Utils
import axios from "axios";

const getAll = (url) => axios.get(url);

const getById = (url, id) => axios.get(`${url}/${id}`);

const addItem = (url, data) => axios.post(url, data);

const updateItem = (url, id, data) => axios.put(`${url}/${id}`, data);

const updateItemWatchMovies = (url, data) => axios.put(`${url}`, data);

const patchItem = (url, id, data) => axios.patch(`${url}/${id}`, data);

const deleteItem = (url, id) => axios.delete(`${url}/${id}`);

export {
  getAll,
  getById,
  addItem,
  updateItem,
  patchItem,
  deleteItem,
  updateItemWatchMovies,
};
