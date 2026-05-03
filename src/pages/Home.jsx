import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
export default function Home() {
  return (
    <>
      <div className="main-content home container">
        <img className="profile-img" src="mohiuddin.jpg" alt="Md. Mohi Uddin" />
        <h2 className="greetings">Hello, I'm</h2>
        <h1 className="profile-title">Md. Mohi Uddin</h1>
        {/* <p className="profile-text">
          I’m a Full-Stack JavaScript Developer with hands-on experience in
          Banking IT and FinTech systems. I enjoy building scalable applications
          using Node.js, React, and modern backend technologies.
        </p> */}

        <p className="profile-text">
          I’m a Full-Stack JavaScript Developer with a background in Banking IT
          and Core Banking Systems. I build web applications using Node.js and
          React while leveraging my experience in financial systems and
          database-driven environments.
        </p>

        <Link to="/about" className="profile-btn">
          More About Me
          <FaLongArrowAltRight size={24} />{" "}
        </Link>

       
      </div>
    </>
  );
}
