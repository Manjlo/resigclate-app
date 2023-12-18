import { useSelector, useDispatch } from "react-redux";
import { setUser, logout } from "../reducers/auth.reducer";
import { getUserById } from "../services-controller/services-request/services-user";

const useLoginUser = (setLoading) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const login = async (userId) => {
    setLoading(true);
    const response = await getUserById(userId);
    dispatch(setUser(response));
    setLoading(false);

    return response ? true : false;
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return { user, login, logoutUser };
};

export default useLoginUser;
