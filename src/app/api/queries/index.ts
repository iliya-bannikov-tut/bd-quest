import { api } from "..";
import type { MainCheckParams, SignInParams, Task2CheckParams } from "./types";

export const mainCheck = async (params: MainCheckParams) => {
  const data = await api.get("/main/check", {
    params,
  });

  return data.data;
};

export const signIn = async (params: SignInParams) => {
  const data = await api.get("/task2/sign_in", {
    params,
  });

  return data.data;
};

export const task4Check = async (params: Task2CheckParams) => {
  const data = await api.get("/task4/check", {
    params,
  });

  return data.data;
};
