import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="flew-row top-2 left-2 flex w-full items-center justify-between p-4 text-xl">
      <NavLink className="text-4xl" to={"/"}>
        🦉
      </NavLink>
      <div>
        <NavLink
          to={"/router"}
          className="w-fit rounded-2xl bg-teal-300 px-6 py-2"
        >
          Router
        </NavLink>
      </div>
    </nav>
  );
}
