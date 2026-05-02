import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";

export default function Footer(){
  const year = new Date().getFullYear();
  return(
    <footer className="footer-content">
      <hr />
      
        <div className="action-links">
        <a href="https://github.com/Mohiuuddin" target="_blank" rel="noopener noreferrer"><FiGithub/></a>
        <a href="mailto:mohiuddin4296@gmail.com" rel="noopener noreferrer"><FiMail/></a>
        <a href="https://www.linkedin.com/in/mohiuddin777/" target="_blank" rel="noopener noreferrer"><FiLinkedin/></a>
      </div>
      <div className="footer-text">
        <div>© {year}</div>
        <span> • </span>
        <a href="/">Md. Mohi Uddin. All Rights Reserved.</a>
      </div>
      
    </footer>
  );
}