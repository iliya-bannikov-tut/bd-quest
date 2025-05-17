import { createBrowserRouter } from "react-router";
import { Main } from "../../pages/main";
import { Task1 } from "../../pages/task1";
import { Task2 } from "../../pages/task2";
import { Task3 } from "../../pages/task3";
import { Task4 } from "../../pages/task4";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/1",
    element: <Task1 />,
  },
  {
    path: "/2",
    element: <Task2 />,
  },
  {
    path: "/3",
    element: <Task3 />,
  },
  {
    path: "/4",
    element: <Task4 />,
  },
]);
