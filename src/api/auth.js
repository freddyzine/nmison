import axios from "axios";
import { apiCaller } from "../helpers/utils";
import { authStore } from "../store/authStore";
import { BASE_URL } from "./config";

export const verifyEmail = async (email, password) => {
  try {
    const config = {
      method: "post",
      url: `${BASE_URL}/verify/email`,

      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        email,
        password,
      }),
    };
    const response = await axios(config);
    return {
      status: response.status,
      data: response.data?.data,
      message: response.data?.message,
      error: response.data.error,
    };
  } catch (err) {
    return {
      status: err.response.status,
      data: err.response.data?.data,
      message: err.response.data.message,
      error: err.response.data.error,
    };
  }
};

export const verifyOtp = async (data) => {
  return  await apiCaller({
      method: "post",
      url: `${BASE_URL}/verify/otp`,

      headers: {
        "Content-Type": "application/json",
      },
      data,
    })
};

export const sendOtp = async (data) => {
  return  await apiCaller({
    method: "post",

    url: `${BASE_URL}/send/otp`,
    headers: {
      "Content-Type": "application/json",
    },
    data,
  })
};

export const register = async (data) => {
  try {
    const config = {
      method: "post",
      url: `${BASE_URL}/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };
    const response = await axios(config);
    return {
      status: response.status,
      data: response.data?.data,
      message: response.data?.message,
      error: response.data.error,
    };
  } catch (err) {
    return {
      status: err.response.status,
      data: err.response.data?.data,
      message: err.response.data.message,
      error: err.response.data.error,
    };
  }
};

export const signin = async (data) => {
  try {
    const config = {
      method: "post",
      url: `${BASE_URL}/login`,
      headers: {
        "Content-Type": "application/json",
      },

      data: JSON.stringify(data),
    };
    const response = await axios(config);
    return {
      status: response.data.status,
      data: response.data?.data,
      message: response.data?.message,
      error: response.data.error,
    };
  } catch (err) {
    return {
      status: err.response?.status,
      data: err.response.data?.data,
      message: err.response.data.message,
      error: err.response.data.error,
    };
  }
};

export const resetPassword = async (data) => {
  try {
    const config = {
      method: "put",
      url: `${BASE_URL}/set-password`,
      headers: {
        Authorization: `Bearer ${authStore.authDetails.resetToken}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };
    const response = await axios(config);
    return {
      status: response.status,
      data: response.data?.data,
      message: response.data?.message,
      error: response.data.error,
    };
  } catch (err) {
    return {
      status: err.response.status,
      data: err.response.data?.data,
      message: err.response.data.message,
      error: err.response.data.error,
    };
  }
};

export const googleSignin = async (data) => {
  try {
    const config = {
      method: "post",
      url: `${BASE_URL}/google`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };
    const response = await axios(config);
    return {
      status: response.status,
      data: response.data?.data,
      message: response.data?.message,
      error: response.data.error,
    };
  } catch (err) {
    return {
      status: err.response.status,
      data: err.response.data?.data,
      message: err.response.data.message,
      error: err.response.data.error,
    };
  }
};

export const logoutUser = async () => {
  try {
    const config = {
      method: "delete",
      url: `${BASE_URL}/logout`,
      headers: {
        Authorization: `Bearer ${authStore.authDetails.token}`,
      },
    };
    const response = await axios(config);
    return {
      status: response.status,
      data: response.data?.data,
      message: response.data?.message,
      error: response.data.error,
    };
  } catch (err) {
    return {
      status: err.response.status,
      data: err.response.data?.data,
      message: err.response.data.message,
      error: err.response.data.error,
    };
  }
};
