
import {motion} from "motion/react";

export default function HomeRes () {
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1, transition: {staggerChildren: 0.8}
        }
    };

    const itemVariants = {
        hidden: {opacity: 0, y: -15},
        visible: {
            opacity: 1, y: 0, transition: {duration: 1.5, ease: "easeIn"}
        }
    };

    return (
        <motion.div 
          initial="hidden"
          variants={containerVariants}
          whileInView="visible"
          viewport={{once: true}}
        >
          <motion.h1 
            className="subsection_title" variants={itemVariants}>
            Headshot and Resume</motion.h1>
          <motion.div className="home_pic_and_res" variants={itemVariants}>
            <img
              alt="Brienna Halterman headshot"
              className="home_img"
              src="/images/brienna_halterman_headshot1.JPG"
            />
            <img
              alt="Brienna Halterman creative resume"
              className="home_img"
              src="/documents/brienna_halterman_creative_resume_img.png"
            />
            <a
              className="btn-primary"
              download="Brienna_Halterman_Headshot"
              href="/images/brienna_halterman_headshot1.JPG"
            >
              Download Headshot
            </a>
            <a
              className="btn-primary"
              download="Brienna_Halterman_Resume"
              href="/documents/brienna_halterman_creative_resume.pdf"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
    );
}