import React from 'react'
import projectOneImg from '../../assets/images/project1.PNG'
import projectTwoImg from '../../assets/images/project2.PNG'
import projectThreeImg from '../../assets/images/project3.PNG'
import projectFourImg from '../../assets/images/project4.PNG'
import projectFiveImg from '../../assets/images/project5.PNG'
import projectSixImg from '../../assets/images/project6.PNG'

export default function Projects() {
  return (
    <>
      <section id='projects' className="bg-[#111827] py-10 min-h-screen transition-all duration-700 ease-in-out">
        <div className="container mx-auto px-4">
          <div className="mainTitle text-center">
            <h2 className="text-3xl text-white font-bold font-poppins relative after:content-[''] after:block after:h-1 after:w-32 after:rounded-full after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:mt-2 after:mx-auto">
              Projects
            </h2>
          </div>

          <div className="row flex flex-wrap justify-center items-stretch gap-10 pt-10">

            {/* Project 1 */}
            <div className="card w-[400px] group bg-[#1F2937] rounded-xl overflow-hidden hover:scale-105 transition-all duration-700">
              <img src={projectOneImg} className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-700" alt="project1" />
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold">Start Frame Work</h3>
                <p className="text-sm text-gray-300 py-2">
                  A single-page portfolio website built with React and the Start Bootstrap theme. It features reusable components (Navbar, Home, Portfolio, About, Contact, Footer), smooth navigation using React Router, responsive layout with Bootstrap, modular CSS for custom styling, and Font Awesome icons for an enhanced UI.                </p>
                <div className="flex flex-wrap gap-2 pb-3">
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">React JS</span>
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">HTML</span>
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">CSS</span>
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">Bootstrap</span>
                </div>
                <button type='button' className='hover:bg-gradient-to-br border border-purple-500 from-blue-400 to-purple-500 rounded-full w-40 py-2 text-center font-bold text-xl cursor-pointer duration-500 transition-colors hover:duration-500 hover:transition-colors'>
                  <a href="https://nesmafarid9.github.io/Start-Framework/" target='_blank' rel="noopener noreferrer">Live Demo</a>
                </button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="card w-[400px] group bg-[#1F2937] rounded-xl overflow-hidden hover:scale-105 transition-all duration-700">
              <img src={projectTwoImg} className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-700" alt="project2" />
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold">Game Reviews</h3>
                <p className="text-sm text-gray-300 py-2">
                  Developed a responsive website that displays video game reviews by integrating a third-party API using JavaScript. Utilized Bootstrap for layout and styling to ensure mobile responsiveness and a clean UI. Implemented dynamic content rendering, interactive game cards, and basic error handling.                </p>
                <div className="flex flex-wrap gap-2 pb-3">
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">JavaScript (OOP)</span>
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">API</span>
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">HTML</span>
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">CSS</span>
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">Bootstrap</span>
                </div>
                <button type='button' className='hover:bg-gradient-to-br border border-purple-500 from-blue-400 to-purple-500 rounded-full w-40 py-2 text-center font-bold text-xl cursor-pointer duration-500 transition-colors hover:duration-500 hover:transition-colors'>
                  <a href="https://nesmafarid9.github.io/Game-Reviews/" target='_blank' rel="noopener noreferrer">Live Demo</a>
                </button>
              </div>
            </div>

            {/* Project 3 */}
            <div className="card w-[400px] group bg-[#1F2937] rounded-xl overflow-hidden hover:scale-105 transition-all duration-700">
              <img src={projectThreeImg} className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-700" alt="project3" />
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold">Weather Website</h3>
                <p className="text-sm text-gray-300 py-2">
                  Built a responsive weather application that displays a 3-day forecast using data from a public RESTful weather API. Integrated JavaScript to dynamically fetch and render weather details. Used Bootstrap for layout and custom CSS for styling enhancements.                </p>
                <div className="flex flex-wrap gap-2 pb-3">
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">Java Script</span>
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">API</span>
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">HTML</span>
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">CSS</span>
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">Bootstrap</span>
                </div>
                <button type='button' className='hover:bg-gradient-to-br border border-purple-500 from-blue-400 to-purple-500 rounded-full w-40 py-2 text-center font-bold text-xl cursor-pointer duration-500 transition-colors hover:duration-500 hover:transition-colors'>
                  <a href="https://nesmafarid9.github.io/Weather-Api/" target='_blank' rel="noopener noreferrer">Live Demo</a>
                </button>
              </div>
            </div>

            {/* Project 4 */}
            <div className="card w-[400px] group bg-[#1F2937] rounded-xl overflow-hidden hover:scale-105 transition-all duration-700">
              <img src={projectFourImg} className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-700" alt="project4" />
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold">Login System</h3>
                <p className="text-sm text-gray-300 py-2">
                  Developed a multi-page authentication website with Register, Login, and Home pages using pure JavaScript, HTML, and CSS. Users can register with validation and login using local storage, receiving personalized welcome messages                </p>
                <div className="flex flex-wrap gap-2 pb-3">
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">JavaScript</span>
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">LocalStorage</span>
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">HTML</span>
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">CSS</span>
                  
                </div>
                <button type='button' className='hover:bg-gradient-to-br border border-purple-500 from-blue-400 to-purple-500 rounded-full w-40 py-2 text-center font-bold text-xl cursor-pointer duration-500 transition-colors hover:duration-500 hover:transition-colors'>
                  <a href="https://nesmafarid9.github.io/Login-Page/" target='_blank' rel="noopener noreferrer">Live Demo</a>
                </button>
              </div>
            </div>

            {/* Project 5 */}
            <div className="card w-[400px] group bg-[#1F2937] rounded-xl overflow-hidden hover:scale-105 transition-all duration-700">
              <img src={projectFiveImg} className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-700" alt="project5" />
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold">Daniels Portfolio</h3>
                <p className="text-sm text-gray-300 py-2">
                  Developed a responsive personal portfolio website based on the Bootstrap template. Implemented structured sections including Home, About, Services, Portfolio, Testimonials, and Contact, using Bootstrap’s grid layout and responsiveness                </p>
                <div className="flex flex-wrap gap-2 pb-3">
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">HTML</span>
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">CSS</span>
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">Bootstrap</span>
                </div>
                <button type='button' className='hover:bg-gradient-to-br border border-purple-500 from-blue-400 to-purple-500 rounded-full w-40 py-2 text-center font-bold text-xl cursor-pointer duration-500 transition-colors hover:duration-500 hover:transition-colors'>
                  <a href="https://nesmafarid9.github.io/Daniels/" target='_blank' rel="noopener noreferrer">Live Demo</a>
                </button>
              </div>
            </div>

            {/* Project 6 */}
            <div className="card w-[400px] group bg-[#1F2937] rounded-xl overflow-hidden hover:scale-105 transition-all duration-700">
              <img src={projectSixImg} className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-700" alt="project6" />
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold">Bakery</h3>
                <p className="text-sm text-gray-300 py-2">
                  Developed a responsive bakery website landing page featuring sections like Home, About, Our Offer, Gallery, Blog, and Contact. Used Bootstrap for layout and custom CSS for visual design.                </p>
                <div className="flex flex-wrap gap-2 pb-3">
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">HTML</span>
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">CSS</span>
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">JavaScript</span>
                  <span className="rounded-full text-white bg-gray-500 px-3 pb-1 pt-0.5 text-xs">Bootstrap</span>
                </div>
                <button type='button' className='hover:bg-gradient-to-br border border-purple-500 from-blue-400 to-purple-500 rounded-full w-40 py-2 text-center font-bold text-xl cursor-pointer duration-500 transition-colors hover:duration-500 hover:transition-colors'>
                  <a href="https://nesmafarid9.github.io/Bakery/" target='_blank' rel="noopener noreferrer">Live Demo</a>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
