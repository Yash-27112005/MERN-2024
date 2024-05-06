import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <div id="error-page">
        <div className="content">
          <h2 className="header">404</h2>
          <h4>Sorry ! Page not found</h4>
          <p>
            Oops! It seems like the page you trying to access doesn exist. 
            if you believe there an issue, feel free to report is , and we 
            look into it.
          </p>
          <div className="btns">
            <NavLink to="/"> return home</NavLink>
            <NavLink to="/contact"> report problem</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
