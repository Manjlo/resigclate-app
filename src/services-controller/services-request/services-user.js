import { USERS_PATH } from "../paths";
import { get, post, put, remove } from "../services";

/*
router.post("/", createUser);
router.get("/:id", getUserById); */

const createUser = async (user) => {
  console.log(user);
  return await post(`${USERS_PATH}/new`, { user: user });
};

const getUserById = async (id) => {
  return await get(`${USERS_PATH}/${id}`);
};

const updateUser = async (id, user) => {
  return await put(`${USERS_PATH}/${id}`, user);
};

const deleteUser = async (id) => {
  return await remove(`${USERS_PATH}/${id}`);
};

export { createUser, getUserById, updateUser, deleteUser };
