import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

const API = {
  HOST: "http://89.169.163.227",
  API: "/api",
};

export const api = axios.create({
  baseURL: API.HOST + API.API,
  timeout: 1000,
});

export const queryClient = new QueryClient();
