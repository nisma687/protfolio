import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navlink=<>
    <li>
        <NavLink to="/" className="btn btn-ghost btn-sm rounded-btn">Home</NavLink>

    </li>
    <li>
        <NavLink to="/projects" className="btn btn-ghost btn-sm rounded-btn">Projects</NavLink>
    </li>
    <li>
        <NavLink to="/contactMe" className="btn btn-ghost btn-sm rounded-btn">Contact Me</NavLink>
    </li>
    {/* <li>
        <NavLink to="/resume" className="btn btn-ghost btn-sm rounded-btn">Resume</NavLink>
    </li> */}
    <li>
        <NavLink to="/skills" className="btn btn-ghost btn-sm rounded-btn">Skills</NavLink>
    </li>
    <li>
        <NavLink to="/aboutMe" className="btn btn-ghost btn-sm rounded-btn">About Me</NavLink>
    </li>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlink}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
        <span className="text-lg font-bold">
            Welcome to my portfolio
        </span>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navlink}
    </ul>
  </div>
  
</div>
    );
};

export default Navbar;