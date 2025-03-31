import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="flew-row top-2 left-2 flex w-full items-center justify-between bg-gradient-to-r from-violet-500 to-blue-400 p-4 text-xl">
      <NavLink className="text-4xl" to={"/"}>
        🦉
      </NavLink>
      <div className="flex flex-row gap-2">
        <NavLink to={"/router"} className="LinkButton">
          Router
        </NavLink>
        <NavLink to={"/query"} className="LinkButton">
          Query
        </NavLink>
        <NavLink to={"/useMutation"} className="LinkButton">
          UseMutation
        </NavLink>
        <NavLink to={"/zustand"} className="LinkButton">
          Zustand
        </NavLink>
      </div>
    </nav>
  );
}
