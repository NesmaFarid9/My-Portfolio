// import {createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Components/Home/Home"
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Experience/>
    <Contact/>
    </>
  )
}

export default App
