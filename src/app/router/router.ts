import { createBrowserRouter } from "react-router";
import { Main } from "../../pages/main";
import { Task1 } from "../../pages/task1";
import { Task2 } from "../../pages/task2";
import { Task3 } from "../../pages/task3";
import { Task4 } from "../../pages/task4";
import { App } from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Main,
      },
      {
        path: "/task1",
        Component: Task1,
      },
      {
        path: "/task2",
        Component: Task2,
      },
      {
        path: "/task3",
        Component: Task3,
      },
      {
        path: "/task4",
        Component: Task4,
      },
    ],
  },
]);
