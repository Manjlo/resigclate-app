import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
import firebaseApp from "./handler";

const auth = getAuth(firebaseApp);

const saveAuth = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const getToken = () => auth?.currentUser?.getIdToken();

export const currentUser = auth.currentUser;

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
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
