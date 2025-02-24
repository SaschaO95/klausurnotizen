import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="absolute top-2 left-2 items-center justify-between text-xl">
      <NavLink className="text-4xl" to={"/"}>
        🦉
      </NavLink>
    </nav>
  );
}
