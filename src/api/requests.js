import axios from "axios";
import { apiCaller } from "../helpers/utils";
import { authStore } from "../store/authStore";
import { BASE_URL } from "./config";

export const fetchUserRequests = async (page) => {
  return await apiCaller({
    method: "GET",
    url: `${BASE_URL}/request/user?page=${page}`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + authStore.authDetails.token
    },
  })
};

export const getRequest = async (id) => {
  return await apiCaller({
      method: "GET",
      url: `${BASE_URL}/request/${id}`,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + authStore.authDetails.token
      },
  })
}

export const updateRequestStatus = async (data) => {
  return await apiCaller({
    method: "PUT",
    url: `${BASE_URL}/request/status`,
    data,
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + authStore.authDetails.token
    },
  })
}

export const createUserRequest = async (data) => {
  try {
    const config = {
      method: "post",
      url: `${BASE_URL}/request`,
      headers: {
        Authorization: `Bearer ${authStore.authDetails.token}`,
      },
      data,
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

export const uploadDocs = async (data, type) => {
  return await apiCaller({
    method: "POST",
    url: `${BASE_URL}/request/${type}`,
    data,
    headers: {
      "Authorization": "Bearer " + authStore.authDetails.token
    },
  })
}

export const makeReview = async (data) => {
  return await apiCaller({
    method: "POST",
    url: `${BASE_URL}/request/feed-back`,
    data,
    headers: { "Authorization": "Bearer " + authStore.authDetails.token },
  })
}
