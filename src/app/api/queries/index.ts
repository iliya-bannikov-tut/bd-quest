import { api } from "..";
import type { MainCheckParams, SignInParams, Task4CheckParams } from "./types";

export const mainCheck = async (params: MainCheckParams) => {
  const data = await api.get("/main/check", {
    params,
  });

  return data.data;
};

export const signIn = async (params: SignInParams) => {
  const data = await api.get("/task2/check", {
    params,
  });

  return data.data;
};

export const task4Check = async (params: Task4CheckParams) => {
  const data = await api.get("/task4/check", {
    params,
  });

  return data.data;
};
