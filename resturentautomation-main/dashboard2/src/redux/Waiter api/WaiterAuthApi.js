import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const LoginRoute = async (FormData) =>
  await API.post("/auth/login", FormData, {
    headers: { "Content-Type": "application/json" },
  });
export const SignUpRoute = (FormData) => {
  console.log(FormData);
  return API.post("/auth/register", FormData, {
    headers: { "Content-Type": "application/json" },
  });
};

export const Getwaiterdatabyid = async (id) => {
  return API.get(`/auth/waiter/${id}`);
};
export const UpdateWaiterbyId = async (id) => {
  return API.put(`/auth/${id}`);
};
