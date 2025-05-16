import { NavLink } from "react-router-dom";

export function KlausurNavbar() {
  return (
    <nav className="flew-row top-2 left-2 flex w-full items-center justify-end bg-gradient-to-r from-violet-500 to-blue-400 p-4 text-xl">
      <div className="flex flex-row gap-2">
        <NavLink to={"/terminal"} className="LinkButton">
          Terminalbefehle
        </NavLink>
        <NavLink to={"/dockerfile"} className="LinkButton">
          Dockerfile
        </NavLink>
        <NavLink to={"/compose"} className="LinkButton">
          Docker Compose
        </NavLink>
        <NavLink to={"/drizzle"} className="LinkButton">
          Drizzle
        </NavLink>
        <NavLink to={"/zod"} className="LinkButton">
          Zod
        </NavLink>
        <NavLink to={"/json"} className="LinkButton">
          Package JSON
        </NavLink>
      </div>
    </nav>
  );
}
