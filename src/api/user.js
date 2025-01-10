//import axios from "axios";
import { apiCaller } from "../helpers/utils";
import { authStore } from "../store/authStore";
import { BASE_URL } from "./config";

export const fetchUser = async () => {
  return await apiCaller({
    method: "get",
    url: `${BASE_URL}/user/profile`,
    headers: {
      Authorization: `Bearer ${authStore.authDetails.token}`,
    },
  })
};

export const editUser = async (data) => {
  return await apiCaller({
    method: "PUT",
    url: `${BASE_URL}/user`,
    headers: {
      Authorization: `Bearer ${authStore.authDetails.token}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  })
};

export const editPassword = async (old_password, password) => {
  return await apiCaller({
    method: "POST",
    url: `${BASE_URL}/user/change-password`,
    headers: {
      Authorization: `Bearer ${authStore.authDetails.token}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      old_password,
      password,
    }),
  })
};
