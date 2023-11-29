import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
import firebaseApp from "./handler";

const auth = getAuth(firebaseApp);

export const currentUser = auth.currentUser;

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const onAuthChange = (callback) => {
  onAuthStateChanged(auth, callback);
};

export default auth;
