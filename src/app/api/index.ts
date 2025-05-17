import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

const API = {
  HOST: "https://api.example.com",
  API: "/api/v1",
};

export const api = axios.create({
  baseURL: API.HOST + API.API,
  timeout: 1000,
});

export const queryClient = new QueryClient();
