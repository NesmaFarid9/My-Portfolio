import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <>
      <section id='about' className="bg-[#1F2937] py-5 md:h-[60vh] h-[70vh]">
        <div className="container py-5">

          {/* Title */}
          <motion.div
            className="mainTitle text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl text-white font-bold font-poppins relative after:content-[''] after:block after:h-1 after:w-32 after:rounded-full after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:mx-auto">
              About Me
            </h2>
          </motion.div>

          <div className="pt-10" />

          {/* Description */}
          <motion.div
            className="description rounded-md p-[5px] shadow-2xl shadow-black max-w-3xl lg:mx-auto mx-5 text-justify bg-gradient-to-r from-blue-400 to-purple-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className='bg-white text-gray-600 rounded-md p-7 font-poppins text-xl'>
              I'm a Front-End Developer with a strong focus on translating UI/UX designs into clean, responsive, and high-performance code using React.js, JavaScript, HTML, CSS, and Bootstrap. Committed to delivering intuitive user experiences through modern web technologies, scalable front-end architecture, and best coding practices. I bring a collaborative mindset, attention to detail, and a continuous drive for learning and improvement.
            </p>
          </motion.div>

        </div>
      </section>
    </>
  );
}
