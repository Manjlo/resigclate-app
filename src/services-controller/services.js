import axios from "axios";
import { getToken } from "../services-firebase/auth";

const PATH_LOCAL = "http://127.0.0.1:5001/vivid-pen-403105/us-central1/app";
const ONLINE_PATH_BASE = "https://us-central1-vivid-pen-403105.cloudfunctions.net/app";

const PATH_BASE = ONLINE_PATH_BASE;
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
