// import {createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Components/Home/Home"
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/About/About";

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Contact/>
    </>
  )
}

export default App
