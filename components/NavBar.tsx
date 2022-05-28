import Link from "next/link";
import React, { useEffect, useState } from "react";
import {Squeeze as Hamburger} from 'hamburger-react'

import {motion , AnimatePresence} from 'framer-motion'



import {FaTwitter ,FaGithub , FaCodepen } from 'react-icons/fa'
import{MdEmail} from 'react-icons/md'
import {useRouter} from 'next/router'




const NavBar = () => {
 
  const [open , setOpen] = useState<boolean>(false)

  const [show ,setShow] = useState<string>('') 

 const router = useRouter() 

  const wrapperAnima = {


    hidden: {scaleY:0,opacity:1} ,


    show: {
        scaleY:1,opacity:1,
      transition:{type:'spring', stiffness:50 , staggerChildren:.25, delayChildren : .3   } } ,


    exit : {
        scaleY:0,opacity:1,
        transition:{type:'spring' ,stiffness:50, staggerChildren : .2 ,staggerDirection: -1 ,delay:2.1 } } ,

  }



  const linkAnima  = {
    hidden: {y:200 , opacity:1} ,

    show:{y:0,opacity:1 , transition: {type:'spring',stiffness:80 ,damping: 20 ,mass:.5 }}, 

    exit : {y:-200 , opacity:1 , transition:{type:'spring',damping: 20 , stiffness:80 , mass:.5} }

  }

    const list:string[] = ['home','project' , 'about' , 'blog']

    const listLink:string[] = ['/','/project' , '/about' , '/blog']

    return(
      <section
          className="
          min-w-[100vw] text-neutral-300 
          flex md:p-4 p-2  relative flex-col items-end justify-between "  
          >



      <span
          className={`
      
          hover:opacity-80 
          scale-75 md:scale-100
          transition-all ease duration-300 p-4 rounded-full z-30 ${open? 'bg-stone-900':'bg-stone-700'}`}
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
                  z-10 absolute
                  min-h-screen w-[100vw]
                  bg-[rgba(26,26,26,.8)]
                  text-[rgba(255,255,255,.4)]
                  backdrop-filter
                  backdrop-blur-xl
                  flex flex-col items-center justify-between"
          >

            
         <div
            onClick={()=>{setOpen(!open)}}  
            className="flex  grow  self-auto md:self-start  flex-col items-start justify-evenly"  
            >   

          {list.map((skill,i)=>(

                <motion.div
                  key={skill} 
                  className={` 
                  ${router.route === listLink[i]? 'text-stone-50' :''  }
                  overflow-clip
                  px-4     
                  hover:text-stone-50
                  transition-all ease duration-200 
                  cursor-pointer `}
                    >
                     
                    <Link href={`${listLink[i]}`}
                    ><motion.h2
                      variants={linkAnima} 
                      >{skill}</motion.h2></Link>   
                </motion.div>

          ))}
        </div>

        <div 
            className="flex  w-[100vw] items-center md:items-end p-10 gap-[5vmin] justify-center md:justify-end
              overflow-hidden 
               "  
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
