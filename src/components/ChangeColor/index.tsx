import { useEffect } from "react";
import { useLocation } from "react-router";

export const ChangeBackgroundColor = () => {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove("main", "task1", "task2", "task3", "task4");

    if (location.pathname === "/main") {
      document.body.classList.add("main");
    } else if (location.pathname === "/task1") {
      document.body.classList.add("task1");
    } else if (location.pathname === "/task2") {
      document.body.classList.add("task2");
    } else if (location.pathname === "/task3") {
      document.body.classList.add("task3");
    } else if (location.pathname === "/task4") {
      document.body.classList.add("task4");
    }
  }, [location]);

  return null;
};
