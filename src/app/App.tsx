import { Outlet } from "react-router";
import { ChangeBackgroundColor } from "../components/ChangeColor";

export const App = () => {
  return (
    <>
      <ChangeBackgroundColor />
      <Outlet />
    </>
  );
};
