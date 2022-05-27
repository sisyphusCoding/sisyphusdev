import Link from "next/link";
import React, { useEffect, useState } from "react";
import {Squeeze as Hamburger} from 'hamburger-react'

import {motion , AnimatePresence} from 'framer-motion'



import {FaTwitter ,FaGithub , FaCodepen } from 'react-icons/fa'
import{MdEmail} from 'react-icons/md'
import { link } from "fs";




const NavBar = () => {
 
  const [open , setOpen] = useState<boolean>(false)

  const [show ,setShow] = useState<string>('') 

  

  const wrapperAnima = {


    hidden: {scaleY:0,opacity:1} ,


    show: {
        scaleY:1,opacity:1,
      transition:{type:'spring', stiffness:50 , staggerChildren:.25, delayChildren : .37   } } ,


    exit : {
        scaleY:0,opacity:1,
        transition:{type:'spring' ,stiffness:50, staggerChildren : .2 ,staggerDirection: -1 ,delay:1.8 } } ,

  }



  const linkAnima  = {
    hidden: {y:200 , opacity:1} ,

    show:{y:0,opacity:1 , transition: {type:'spring',stiffness:50 , duration :2}}, 

    exit : {y:-200 , opacity:1 , transition:{type:'spring' , stiffness:50} }

  }

    const list:string[] = ['project' , 'about' , 'blog']

  return(
      <section
          className="
          min-w-[100vw]
          flex md:p-4 p-2  relative flex-col items-end justify-between "  
          >



      <span
          className={`
          hover:opacity-80 
          scale-75 md:scale-100
          transition-all ease duration-300 p-4 rounded-full z-30 ${open? 'bg-stone-600':'bg-stone-700'}`}
          >
      <Hamburger 
          duration={2}
          easing='cubic-bezier(.11,-0.72,0,1.84)'
          rounded 
          toggled={open} 
          distance='lg' 
          hideOutline={false} 
          onToggle={()=>{setOpen(!open)}} 
          size={48} />
      </span>



        <AnimatePresence exitBeforeEnter>
        {open?
        <motion.div
          variants={wrapperAnima}
          initial='hidden' animate='show' exit='exit'
          className="top-0 left-0 
                origin-bottom
                  z-20 absolute
                  min-h-screen w-[100vw]
                  bg-[rgba(0,25,25,.7)]
                  backdrop-filter
                  backdrop-blur-xl
                  flex flex-col items-center justify-between"
          >

            
         <div
            className="flex  grow  self-auto md:self-start  flex-col items-center justify-evenly"  
            >   

          {list.map(skill=>(

                <motion.div
                  key={skill} 
                  className='
                  drop-shadow-[0_5px_8px_rgba(0,0,0,1)]
                  overflow-hidden
                  px-4      
                  hover:text-stone-50
                  transition-all ease duration-200 
                  cursor-pointer py-6' 
                    >
                     
                    <Link href={`/${skill}`}
                    ><motion.h2
                      variants={linkAnima} 
                      >{skill}</motion.h2></Link>   
                </motion.div>

          ))}
        </div>

        <div 
            className="flex  w-[100vw] items-center md:items-end p-10 gap-[5vmin] justify-center md:justify-end
              overflow-hidden 
              text-[rgba(255,255,255,.2)] "  
            >

            <motion.a
                className="hover:text-stone-50 transition-colors ease duration-500 "
                variants={linkAnima}
                href="https://twitter.com/sisyphus_coding">
                <FaTwitter size='8vmin' />
            </motion.a>  

             <motion.a 
                  className="hover:text-stone-50 transition-colors ease duration-500 "  
                variants={linkAnima}
                href='https://codepen.io/coding_anish'>
                <FaCodepen size='8vmin' />
              </motion.a> 

              <motion.a
  className="hover:text-stone-50 transition-colors ease duration-500 "
                variants={linkAnima}
                href='https://github.com/sisyphusCoding'>
                <FaGithub size='8vmin'/>
              </motion.a>

              <motion.a
  className="hover:text-stone-50 transition-colors ease duration-500 "
                variants={linkAnima}
                href="mailto: sautronik@gmail.com">
                <MdEmail size='8vmin'/>
              </motion.a>

            </div>      


        </motion.div>
        :null}

        </AnimatePresence>



      </section>
      
  )


}


export default NavBar
