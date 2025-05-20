import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

const API = {
  HOST: "https://cbist-test.ru",
  API: "/api",
};

export const api = axios.create({
  baseURL: API.HOST + API.API,
  timeout: 1000,
});

export const queryClient = new QueryClient();
