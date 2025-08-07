import React from 'react';
import { motion } from 'framer-motion';
import experienceOneImg from '../../assets/images/experience1.png';
import experienceTwoImg from '../../assets/images/experience2.png';

export default function Experience() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <>
      <section id="experience" className="bg-[#1F2937] py-5 min-h-screen">
        {/* Title */}
        <motion.div
          className="mainTitle text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl pt-10 text-white font-bold font-poppins relative after:content-[''] after:block after:h-1 after:w-32 after:rounded-full after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:mt-2 after:mx-auto">
            Experiences
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="container pt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center align-center items-center gap-5">

            {/* Experience 1 */}
            <motion.div
              variants={fadeInUp}
              className="sm:w-full lg:w-3/12 mx-5 md:mx-0 hover:scale-102 duration-700 transition-all"
            >
              <div className="card-experience bg-[#111827] shadow-sm shadow-black flex flex-col items-center p-7 rounded-2xl text-center text-white">
                <img src={experienceOneImg} alt="Coding Instructor" className="w-20 rounded-2xl" />
                <div className="caption">
                  <div className="py-5 flex justify-center">
                    <h2 className="rounded-2xl py-2 px-2 w-50 font-bold bg-gradient-to-br from-blue-500 to-purple-400">
                      Coding Instructor
                    </h2>
                  </div>
                  <p className="text-gray-400 text-sm">
                    As a Code Instructor at iSchool, I teach students aged 6 to 18 the foundations of computer science using Python, Web development, Mobile development, Game development (Godot), Data Science, and Scratch. I create interactive sessions and tailor teaching methods to diverse skill levels.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Experience 2 */}
            <motion.div
              variants={fadeInUp}
              className="sm:w-full lg:w-3/12 mx-5 md:mx-0 hover:scale-102 duration-700 transition-all"
            >
              <div className="card-experience bg-[#111827] shadow-sm shadow-black flex flex-col items-center p-7 rounded-2xl text-center text-white">
                <img src={experienceOneImg} alt="Education Mentor" className="w-20 rounded-2xl" />
                <div className="caption">
                  <div className="py-5 flex justify-center">
                    <h2 className="rounded-2xl py-2 px-2 w-50 font-bold bg-gradient-to-br from-blue-500 to-purple-400">
                      Education Mentor
                    </h2>
                  </div>
                  <p className="text-gray-400 text-base pb-1">
                    As an Education Mentor, I look forward to supporting, guiding, and mentoring coding instructors to enhance their educational skills and ensure the delivery of high-quality learning experiences for students.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Experience 3 */}
            <motion.div
              variants={fadeInUp}
              className="sm:w-full lg:w-3/12 mx-5 md:mx-0 hover:scale-102 duration-700 transition-all"
            >
              <div className="card-experience bg-[#111827] shadow-sm shadow-black flex flex-col items-center p-8 rounded-2xl text-center text-white">
                <img src={experienceTwoImg} alt="Frontend Internship" className="w-20 rounded-2xl" />
                <div className="caption">
                  <div className="py-5 flex justify-center">
                    <h2 className="rounded-2xl py-2 px-10 w-50 font-bold text-sm bg-gradient-to-br from-blue-500 to-purple-400">
                      Frontend Development Internship
                    </h2>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Covered React.js, HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and real-world projects. Focused on responsive design, UI/UX principles, and building dynamic front-end applications.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>
    </>
  );
}