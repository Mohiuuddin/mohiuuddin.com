import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { ErrorPage } from './components/error';



function Layout(){

 const [dark, setDark] = useState(false);
  
  useEffect(()=>{
    document.body.classList.toggle("dark", dark);
  }, [dark]);


  return(
    <>
    <Navbar dark={dark} setDark={setDark}/>
    <Outlet/>
    <Footer/>
    </>
  );
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      {path: "about", element: <About/>},
      {path: "projects", element: <Projects/>},
      {path: "resume", element: <Resume/> }
    ]
  }
], 
);

function App() {

  return <RouterProvider router={router}/>;
}

export default App
