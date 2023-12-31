import axios from "axios";
import { getToken } from "../services-firebase/auth";


const PATH_BASE = "http://localhost:5000/api";

const configHeaders = async () => {
  const token = await getToken();
  return {
    headers: {
      Authorization: `${token}`,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  };
};

const get = async (path) => {
  const config = await configHeaders();
  const response = await axios.get(`${PATH_BASE}${path}`, config);
  return response.data;
};

const post = async (path, object) => {
  const config = await configHeaders();
  const response = await axios.post(`${PATH_BASE}${path}`, object, config);
  return response.data;
};

const put = async (path, object) => {
  const config = await configHeaders();
  const response = await axios.put(`${PATH_BASE}${path}`, object, config);
  return response.data;
};

const remove = async (path) => {
  const config = await configHeaders();
  const response = await axios.delete(`${PATH_BASE}${path}`, config);
  return response.data;
};

export { get, post, put, remove };
