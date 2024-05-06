import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const { user, isLoading, isLoggedIn } = useAuth();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const commonLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/service">Services</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {isLoggedIn ? (
        <>
          <li>
            <NavLink to="/logout">Logout</NavLink>
          </li>
          {user.isAdmin && (
            <li>
              <NavLink to="/admin/users">Admin</NavLink>
            </li>
          )}
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <header>
        <div className="container">
          <NavLink to="/">MERN</NavLink>
          <nav>
            <ul>{commonLinks}</ul>
          </nav>
        </div>
      </header>
    </>
  );
};
