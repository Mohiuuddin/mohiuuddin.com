import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Projects(){
  return(
    <>
    <div className="main-content">
    <h1 className="poject-title">Projects</h1>
    <hr/>

    <div className="project-grid">
    <div className="project-grid-item">
      <img className="project-img" src="/project-images/blog-client1.png" alt="Blog API solution" />
      <div className="project-details">
        <h2 className="project-name">Blog API</h2>
        <p className="project-desc">Full-Stack Blog Platform A robust, three-tier blog application featuring a RESTful API, a dedicated Admin Dashboard, and a responsive Client frontend. This project emphasizes a decoupled architecture, separating content management and administrative control from the public reader's interface.</p>
        <ul>
          <li>HTML5 & CSS3</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>React</li>
          <li>RESTful API</li>
          <li>PostgreSQL</li>
          <li>Prisma ORM</li>
          <li>JWT (JSON Web Tokens)</li>
          <li>Bcrypt</li>

          
        </ul>
      
        <Link className="project-link" to="https://github.com/Mohiuuddin/blog-api-project">GitHub <FaLongArrowAltRight size={15}/></Link>
      </div>
    </div> 

    <div className="project-grid-item">
      <img className="project-img" src="/project-images/CloudVault-01.png" alt="CloudVault" />
      <div className="project-details">
        <h2 className="project-name">File Uploader - CloudVault</h2>
        <p className="project-desc">CloudVault is a secure, session-based file management application built with Node.js, Express, and Prisma. It serves as a private "On-Premise" cloud solution, allowing users to manage files and folders directly on a local server with a PostgreSQL backend.</p>
        <ul>
          <li>HTML5 & CSS3</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>PostgreSQL</li>
          <li>Prisma ORM</li>
          <li>Passport.js (Local Strategy)</li>
          <li>Bcrypt</li>
          <li>Multer</li>
          
        </ul>
       
        <Link className="project-link" to="https://github.com/Mohiuuddin/file-uploader">GitHub <FaLongArrowAltRight size={15}/></Link>
      </div>
    </div>
   
   
    <div className="project-grid-item">
      <img className="project-img" src="/public/project-images/weather app.png" alt="The Clubhouse" />
      <div className="project-details">
        <h2 className="project-name">The Clubhouse</h2>
        <p className="project-desc">The Clubhouse is a full-stack web application where users can write anonymous posts. However, only "Members" who know the secret passcode can see the authors and timestamps of the messages. "Admins" have the additional power to delete any post.</p>
        <ul>
          <li>HTML5 & CSS3</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>PostgreSQL</li>
          <li>Passport.js (Local Strategy)</li>

        </ul>
        
        <Link className="project-link" to="https://github.com/Mohiuuddin/members-only">GitHub <FaLongArrowAltRight size={15}/></Link>
      </div>
    </div>
    
       <div className="project-grid-item">
      <img className="project-img" src="/project-images/toddlers.png" alt="Shopping Cart" />
      <div className="project-details">
        <h2 className="project-name">Shopping Cart</h2>
        <p className="project-desc">Toddler’s Outfits is a high-performance e-commerce SPA specialized for toddler footwear. It features a sophisticated state management system using React Router's Outlet context, allowing for a smooth shopping experience. The platform handles complex cart logic, such as multi-variant line items for different shoe sizes and features real-time shipping calculations tailored specifically for the Bangladesh regional market.</p>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>React</li>
          <li>React Icons</li>
          <li>Vercel</li>
        </ul>
        <Link className="project-link" to="https://shopping-cart-iuqojjrf4-md-mohi-uddins-projects-abd600cb.vercel.app/" target="_blank" rel="noopener noreferrer">Live <FaLongArrowAltRight size={15}/></Link>
        <Link className="project-link" to="https://github.com/Mohiuuddin/ShoppingCart">GitHub <FaLongArrowAltRight size={15}/></Link>
      </div>
    </div>
   
    <div className="project-grid-item">
      <img className="project-img" src="/project-images/weather app.png" alt="weather app" />
      <div className="project-details">
        <h2 className="project-name">Weather App</h2>
        <p className="project-desc">A sleek, responsive weather application built with vanilla JavaScript that leverages the Visual Crossing API to provide real-time weather data and a 7-day forecast. The UI dynamically adapts its aesthetics based on current weather conditions.</p>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>Visual Crossing Weather API</li>
          <li>Fetch API</li>
        </ul>
        <Link className="project-link" to="https://mohiuuddin.github.io/Weather-App/" target="_blank" rel="noopener noreferrer">Live <FaLongArrowAltRight size={15}/></Link>
        <Link className="project-link" to="https://github.com/Mohiuuddin/Weather-App">GitHub <FaLongArrowAltRight size={15}/></Link>
      </div>
    </div> 

     <div className="project-grid-item">
      <img className="project-img" src="/project-images/Todo List.png" alt="Todo List" />
      <div className="project-details">
        <h2 className="project-name">Todo List - TaskFlow</h2>
        <p className="project-desc">TaskFlow is a high-performance, modular task management application built with Vanilla JavaScript and organized through a professional Webpack build pipeline. It utilizes Object-Oriented Programming (OOP) principles to handle project-based categorization, full CRUD operations, and persistent data storage via the Web Storage API.</p>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>Local Storage API</li>
          <li>Webpack</li>
        </ul>
        <Link className="project-link" to="https://mohiuuddin.github.io/Todo-List/" target="_blank" rel="noopener noreferrer">Live <FaLongArrowAltRight size={15}/></Link>
        <Link className="project-link" to="https://github.com/Mohiuuddin/Todo-List">GitHub <FaLongArrowAltRight size={15}/></Link>
      </div>
    </div>
   
   
    </div> 

    <div className="project-git-link">
       <Link to="https://github.com/Mohiuuddin" className="project-btn" target="_blank" rel="noopener noreferrer">
          More On Github
          <FaLongArrowAltRight size={24} />
    </Link>

    </div>

    </div>
    </>
  );
}