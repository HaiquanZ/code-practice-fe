import axios from "axios";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logoutFailed,
  logoutStart,
  logoutSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from "./authSlice";
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:8000/api/users/login", user);
    //console.log(res.data);
    dispatch(loginSuccess(res.data));
    if (res.data.user.role_id === 1) navigate("/admin");
    else navigate("/");
  } catch (err) {
    dispatch(loginFailed());
    //console.log(err.response.data.message);
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post("http://localhost:8000/api/users/register", user);
    dispatch(registerSuccess());
    alert("Bạn đã đăng ký thành công! Đăng nhập để tiếp tục");
  } catch (err) {
    dispatch(registerFailed());
  }
};

export const logoutUser = (dispatch, navigate) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess());
    alert("Bạn đã đăng xuất thành công !");
    navigate("/");
    alert("Đăng xuất thành công");
    window.location.reload(true);
  } catch (err) {
    dispatch(logoutFailed());
  }
};
