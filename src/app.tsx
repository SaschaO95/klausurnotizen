import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/navbar";

export function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
