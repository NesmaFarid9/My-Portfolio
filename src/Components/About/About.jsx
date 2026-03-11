import React from 'react';
import { motion } from 'framer-motion';
import skillOneIcon from '../../assets/images/React-icon.svg.png'
import skillTwoIcon from '../../assets/images/htmlIcon.svg'
import skillThreeIcon from '../../assets/images/cssIcon.svg'
import skillFourIcon from '../../assets/images/jsIcon.svg'
import skillFiveIcon from '../../assets/images/tsIcon.svg'
import skillSixIcon from '../../assets/images/nextjsIcon.svg'
import skillSevenIcon from '../../assets/images/bootstrapIcon.svg'
import skillEightIcon from '../../assets/images/tailwindCssIcon.svg'


export default function Skills() {
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
      <section id='skills' className="bg-[#1F2937] py-5 md:h-[60vh] h-[70vh]">
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
              Skills
            </h2>
          </motion.div>

          <div className="pt-16" />

          {/* Description */}
          <motion.div
            className="description flex flex-wrap gap-5 p-10 justify-center rounded-md shadow-2xl shadow-black max-w-3xl lg:mx-auto mx-5 text-justify"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <img src={skillOneIcon} alt="react" width={100} height={90}/>
            <img src={skillSixIcon} alt="react" width={90} height={90}/>
            <img src={skillTwoIcon} alt="react" width={90} height={90}/>
            <img src={skillThreeIcon} alt="react" width={90} height={90}/>
            <img src={skillFourIcon} alt="react" width={90} height={90}/>
            <img src={skillFiveIcon} alt="react" width={90} height={90}/>
           
            <img src={skillSevenIcon} alt="react" width={70} height={70}/>
            <img src={skillEightIcon} alt="react" width={90} height={90}/>
            {/* <p className='bg-white text-gray-600 rounded-md p-7 font-poppins text-xl'>
              I'm a Front-End Developer with a strong focus on translating UI/UX designs into clean, responsive, and high-performance code using React.js, JavaScript, HTML, CSS, and Bootstrap. Committed to delivering intuitive user experiences through modern web technologies, scalable front-end architecture, and best coding practices. I bring a collaborative mindset, attention to detail, and a continuous drive for learning and improvement.
            </p> */}
          </motion.div>

        </div>
      </section>
    </>
  );
}
