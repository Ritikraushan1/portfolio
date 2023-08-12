import React from 'react'
import {motion } from "framer-motion"
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai"

const Services = () => {

    const serviceAnimations = {
        whileInView : {
            x:0,
            y:0,
            opacity:1,
        },
        one:{
            x:"-100%",
            opacity:0,
        },
        twoAndThree:{
            y:"-100%",
            opacity:0,
        },
        four:{
            x:"100%",
            opacity:0,
        },
    }
  return (
    <div id='services'>
        <h2>Services</h2>
        <section>
            <motion.div className='serviceBox1' whileInView={serviceAnimations.whileInView} initial={serviceAnimations.one}>
                <h3>5+</h3>
                <p>Years of Experience</p>
            </motion.div>
            <motion.div className='serviceBox2' whileInView={serviceAnimations.whileInView} initial={serviceAnimations.twoAndThree}>
                <AiFillIeCircle />
                <span>Web Development</span>
            </motion.div>
            <motion.div className='serviceBox3' whileInView={serviceAnimations.whileInView} initial={serviceAnimations.twoAndThree} transition={{delay:0.2}}>
                <AiFillAndroid />
                <span>App Development</span>
            </motion.div>
            <motion.div className='serviceBox4' whileInView={serviceAnimations.whileInView} initial={serviceAnimations.four}>
                <AiFillWindows />
                <span>Desktop Development</span>
            </motion.div>
        </section>
    </div>
  )
}

export default Services