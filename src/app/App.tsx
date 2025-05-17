import { Outlet, useNavigate } from "react-router";
import { ChangeBackgroundColor } from "../components/ChangeColor";
import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import goida from "../assets/goida.png";

type TabValue = "" | "task1" | "task2" | "task3" | "task4";

const throttle = (callback: (...args: any) => any, delay: number) => {
  let lastTime = 0;
  return function (...args: any) {
    const now = new Date().getTime();
    if (now - lastTime >= delay) {
      lastTime = now;
      callback(...args);
    }
  };
};

export const App = () => {
  const [currTab, setCurrTab] = useState<TabValue>("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const navigate = useNavigate();

  const handleChange = (_: React.SyntheticEvent, newValue: TabValue) => {
    setCurrTab(newValue);
    navigate(`/${newValue}`);
  };

  useEffect(() => {
    document.onmousemove = throttle((e) => {
      setX(e.pageX + 20);
      setY(e.pageY + 20);
    }, 5);
  }, []);
  return (
    <>
      <img
        style={{
          borderRadius: "9999px",
          width: 50,
          height: 50,
          zIndex: 100,
          position: "absolute",
          left: x,
          top: y,
        }}
        id="goida"
        src={goida}
        alt=""
      />
      <ChangeBackgroundColor />
      <Tabs
        value={currTab}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab value="" label="Сюда писать ответы" />
        <Tab value="task1" label="Задача 1" />
        <Tab value="task2" label="Задача 2" />
        <Tab value="task3" label="Задача 3" />
        <Tab value="task4" label="Задача 4" />
      </Tabs>
      <Outlet />
    </>
  );
};
