import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import personalImg from "../../assets/PersonalImage.jpg";
import { Link } from "react-scroll";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center items-center text-white">
            {/* TEXT SECTION */}
            <motion.div className="w-full md:w-8/12 order-2 md:order-first"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="personal-info md:text-left text-center">
                <motion.h1
                  variants={fadeInUp}
                  className="text-white font-bold md:text-5xl text-4xl font-poppins pb-5"
                >
                  Hello, My name's{" "}
                  <span className="bg-gradient-to-br bg-clip-text text-transparent from-blue-400 to-purple-500">
                    Nesma
                  </span>
                </motion.h1>

                <motion.h3
                  variants={fadeInUp}
                  className="text-white font-semibold text-xl bg-gradient-to-br from-blue-400 to-purple-500 rounded-full w-80 py-2 text-center md:mx-0 mx-auto"
                >
                  Frontend Developer React JS
                </motion.h3>

                <motion.p
                  variants={fadeInUp}
                  className="text-gray-400 text-2xl max-w-2xl pt-5 pb-5"
                >
                  Front-End Developer focused on React.js, dedicated to building
                  clean, responsive, and engaging web experiences.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex gap-5 md:justify-start justify-center items-center"
                >
                  <button
                    type="button"
                    className="hover:bg-gradient-to-br border border-purple-500 from-blue-400 to-purple-500 rounded-full w-30 py-3 text-center font-bold text-xl cursor-pointer transition-all duration-700 ease-in-out hover:scale-102"
                  >
                    <a
                      href="https://drive.google.com/file/d/1UQJdg9psQzLZ26CkmZuADIWw7z5_XNMn/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      My CV
                    </a>
                  </button>
                  <button
                    type="button"
                    className="hover:bg-gradient-to-br border border-purple-500 from-blue-400 to-purple-500 rounded-full w-40 py-3 text-center font-bold text-xl cursor-pointer transition-all duration-700 ease-in-out hover:scale-102"
                  >
                    <Link to={"projects"} smooth={true} duration={800}>
                      My Projects
                    </Link>
                  </button>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="social text-white flex gap-3 pt-5 ps-1 text-2xl justify-center md:justify-start"
                >
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
                </motion.div>
              </div>
            </motion.div>

            {/* IMAGE SECTION */}
            <motion.div
              className="w-6/12 md:w-4/12 md:order-2 order-first"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="personal-img py-15">
                <img
                  src={personalImg}
                  alt="personal"
                  className="w-95 animationImg imgAnimation object-cover rounded-full border-purple-300 shadow-2xl shadow-purple-300 border-7"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
