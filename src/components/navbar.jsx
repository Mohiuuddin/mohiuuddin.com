import { NavLink } from "react-router-dom";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Navbar({dark, setDark}){
  return (
    <nav className="nav-bar">
      <h1 className="logo">Mohi.</h1>
      <div>
      {/* <a href="/" className="nav-item ">Home</a>
      <a href="about" className="nav-item">About</a>
      <a href="projects" className="nav-item">Projects</a>
      <a href="resume" className="nav-item">Resume</a> */}

      <NavLink to="/" className="nav-item">Home</NavLink>
      <NavLink to="about" className="nav-item">About</NavLink>
      <NavLink to="projects" className="nav-item">Projects</NavLink>
      <NavLink to="resume" className="nav-item">Resume</NavLink>
      
      </div>
      <button className="theme-toggle" 
      onClick={()=>setDark(prev=> !prev)}>
        {dark? <HiSun/> : <HiMoon/> }
      </button>
    </nav>
  );
}