import { NavLink } from "react-router-dom";
import { HiMoon, HiSun, HiMenu, HiX  } from "react-icons/hi";
import { useState } from "react";

export default function Navbar({dark, setDark}){
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav-bar container">
      <h1 className="logo">Mohi.</h1>
      <div className={`nav-links ${open ? "active" : ""}`}>
      <NavLink to="/" className="nav-item" onClick={() => setOpen(false)}>Home</NavLink>
      <NavLink to="about" className="nav-item" onClick={() => setOpen(false)}>About</NavLink>
      <NavLink to="projects" className="nav-item" onClick={() => setOpen(false)}>Projects</NavLink>
      {/* <NavLink to="resume" className="nav-item" onClick={() => setOpen(false)}>Resume</NavLink> */} 
      <a href="/Md Mohi Uddin - Resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-item" onClick={() => setOpen(false)}>Resume</a>
      
      </div>
      <div className="nav-actions">
      <button className="theme-toggle" 
      onClick={()=>setDark(prev=> !prev)}>
        {dark? <HiSun/> : <HiMoon/> }
      </button>
      <button
      className="menu-toggle"
      onClick={() => setOpen(prev => !prev)}
    >
      {open ? <HiX /> : <HiMenu />}
    </button>
      </div>
      
    </nav>
  );
}