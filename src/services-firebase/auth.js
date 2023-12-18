import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";

import { firebaseConfig, initializeApp } from "./handler";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const saveAuth = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const getToken = () => auth?.currentUser?.getIdToken();

export const currentUser = auth.currentUser;

export const login = async (email, password) => {
  console.log(auth.currentUser, "auth");
  console.log(auth);
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const register = async (email, password) => {
  let codeResponse = 500;
  const resData = await createUserWithEmailAndPassword(auth, email, password);
  if (resData.user) {
    saveAuth(resData.user.uid);
    codeResponse = 200;
  }
  return [codeResponse, resData];
};

export const onAuthChange = (callback) => {
  onAuthStateChanged(auth, callback);
};

export default auth;
export { getToken };
