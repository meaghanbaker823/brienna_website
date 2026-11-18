import PropTypes from 'prop-types'; // 1. Import the PropTypes library
import {motion} from "motion/react";
export default function AboutMe({ alternate, img_src, paragraph }) {
  const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1, transition: {staggerChildren: 0.8}
        }
    };

    const itemVariants = {
        hidden: {opacity: 0, x: -200},
        visible: {
            opacity: 1, x: 0, transition: {duration: 1.5, ease: "easeIn"}
        }
    };

  return (
    <motion.div 
        initial="hidden"
        variants={containerVariants}
        whileInView="visible"
        viewport={{once: true}}>
      <motion.h1 className="subsection_title">About Me</motion.h1>
      <motion.section className="about_me" variants={itemVariants}>
        <img
          alt={alternate}
          className="about_me_item"
          src={`/images/${img_src}`}
          style={{ width: '45%' }}
        />
        <p className="about_me_item" style={{ textAlign: 'center', fontSize: 'large' }} variants={itemVariants}>
          {paragraph}
        </p>
      </ motion.section>
    </motion.div>
  );
}

AboutMe.propTypes = {
  alternate: PropTypes.string.isRequired,
  img_src: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};
