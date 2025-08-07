import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#111827] h-[20vh] flex justify-center items-center">
      <div className="social text-white flex gap-6 text-2xl">
        <a
          href="https://github.com/NesmaFarid9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-gradient-to-br hover:from-blue-400 hover:to-purple-400 hover:rounded-full p-2 transition duration-700 ease-in-out"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/nesma-farid-45a988243/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-gradient-to-br hover:from-blue-400 hover:to-purple-400 hover:rounded-full p-2 transition duration-700 ease-in-out"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="mailto:nesmafarid1@gmail.com"
          target="_blank"
          className="hover:bg-gradient-to-br hover:from-blue-400 hover:to-purple-400 hover:rounded-full p-2 transition duration-700 ease-in-out"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </section>
  );
}
