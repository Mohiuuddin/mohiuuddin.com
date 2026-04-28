import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";

export default function Footer(){
  return(
    <footer className="footer-content">
      <hr />
      
        <div className="action-links">
        <a href="#"><FiGithub/></a>
        <a href="#"><FiMail/></a>
        <a href="#"><FiLinkedin/></a>
      </div>
      <div className="footer-text">
        <div>© 2026</div>
        <span> • </span>
        <a href="/">Md. Mohi Uddin. All Rights Reserved.</a>
      </div>
      
    </footer>
  );
}