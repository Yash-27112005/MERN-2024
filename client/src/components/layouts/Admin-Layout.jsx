import { NavLink, Navigate, Outlet } from "react-router-dom";
import { FaRegListAlt, FaUser } from "react-icons/fa";
import { MdMessage, MdHome } from "react-icons/md";
import { useAuth } from "../../store/auth";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  console.log("admin layout", user);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!user.isAdmin) {
   Navigate("/");
  }
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                  <FaUser />
                  users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">
                  <MdMessage />
                  contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/service">
                  <FaRegListAlt />
                  services
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <MdHome />
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
