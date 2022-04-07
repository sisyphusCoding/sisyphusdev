import nav from '../styles/nav.module.sass'
import Link  from 'next/link'

import { useState } from 'react'

import { motion } from 'framer-motion'


const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0,x: "70%" },
  transition: {
    staggerChildren: 1
  }

}


const Navbar = () => {

  const [menu , setMenu] = useState(false)

  return (
    <div className={nav.wrapper} >

      <section className={nav.menu} onClick ={()=> {setMenu(!menu)}} style={menu? {boxShadow: '0 0 4vh -.8vh rgba(0,0,0,.6)' , transform: 'perspective(10vh) rotateY(180deg)' } : {boxShadow: '0 0 4vh -.8vh rgba(0,0,0,0)' , transform: 'perspective(10vh) rotateY(0deg)' } }  >
      <div style={menu ? {transform: 'rotate(235deg)' , top: '45%'} : {transform: 'rotate(0)' , top: '1.25vh'}  } ></div>
      <div style={menu ? { opacity: '0' , scale: '0'}: {opacity: '1' ,scale: '1'}} ></div>
      <div style={menu ? {transform: 'rotate(-235deg) translate3d(0,0,2vh)' , top: '45%' } : {transform: 'rotate(0) translate3d(0,0,2vh)' , bottom: '1.25vh'}  } ></div>
      </section>

      <motion.section 
      
      
      animate={menu ? "open" : "closed"}
      variants={variants}
      
      
      
      
      className={nav.linkWrap} >

        <h3>HOME</h3>
        <h3>WORK</h3>
        <h3>ABOUT</h3>
        <h3>BLOG</h3>


        <section>
          <h5>twitter</h5>
          <h5>email</h5>
          <h5>github</h5>
        </section>


      </motion.section>

    </div>
  )
}

export default Navbar