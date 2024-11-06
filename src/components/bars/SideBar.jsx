import { Link, NavLink } from "react-router-dom";

function SideBar() {
  return (

    <aside
      className="sidebar nav flex-column nav-underline position-fixed vh-100 shadow-lg">

      <div className="sidebar-content d-flex flex-column">

        <NavLink to="/">
          <a className="nav-link-custom nav-link py-3">
            <i class="bi bi-house-door"></i>
            Home</a>
        </NavLink>

        <NavLink to="/about-page">
          <a className="nav-link-custom nav-link py-3">
            <i class="bi bi-file-earmark-person"></i>
            About</a>
        </NavLink>

        <NavLink to="/skills/create">
          <a className="nav-link-custom nav-link py-3">
            <i class="bi bi-file-earmark-plus"></i>
            Add Skill</a>
        </NavLink>

        <NavLink to="/">
          <a className="nav-link-custom nav-link py-3">
            <i class="bi bi-file-earmark-person"></i>
            Categories</a>
        </NavLink>
      </div>
    </aside>
  );
};

export default SideBar;