import React from "react";

import {motion ,AnimatePresence} from 'framer-motion'
import ProjectCard from "./components/ProjectCard";

const Project: React.FC = () => {

  const leftIn = {
    hidden: {x:-100,opacity:0},
    show:{x:0,opacity:1,transition:{staggerChildren:.3,type:'spring', delay:.2 , damping: 30}},
    opacity:{x:100,opacity:0}
  }


  const innerText = {
    hidden:{x:200 , opacity:0},
    show:{x:0, opacity: 1,
      transition:{
        duration:1, type:'spring' ,delay:.5 , damping: 40
      }
      }
  }


  const sectionWrap = {
    hidden:{},
    show:{
      transition: {type:'spring' ,  stiffness: 90, staggerChildren: .35,
                delayChildren: 0.8, }
    },
    exit:{}
  }

  const verticalIn = {
    hidden:{y:200 , opacity:0},
    show:{y:0, opacity: 1,
      transition:{
        type:'spring' , damping: 50 , stiffness :100
      }
      }, 
    exit:{y:-200 , opacity:0},

  }

  return(
    <main 
      className="min-h-screen min-w-full flex 
      overflow-hidden 
      flex-row justify-between items-center"
      >
    <AnimatePresence>
      <motion.div
        className="vertical"
        variants={leftIn}
        initial='hidden' animate='show' exit='exit'
        >  
          <section
              className="overflow-hidden"
              >
          <motion.h1 variants={innerText} >Project</motion.h1>
          </section>
      </motion.div>

      <motion.section 
          className="          
            lg:overflow-auto
            overflow-scroll
            min-h-screen max-h-screen
            items-center
            flex px-10 py-2  md:justify-evenly gap-10
            flex-row flex-wrap  justify-start 
            grow w-full"
       variants={sectionWrap}>


          <motion.div 
            variants={verticalIn}
            className="
              drop-shadow-[rgba(0,0,0,1)_0_10px_20px] filter
              overflow-hidden flex justify-self-stretch items-stretch
              rounded-2xl "
             >
            <ProjectCard 
              index="0"
              title="3D Memory Game"
              link='https://sisyphuscoding.github.io/memoryGame/'
              />
            </motion.div>               

          <motion.div 
            variants={verticalIn}
            className="
              drop-shadow-[rgba(0,0,0,1)_0_10px_30px] filter
              overflow-hidden flex justify-self-stretch items-stretch
              rounded-2xl "
             >
            <ProjectCard 
              index="1"
              title="E-commerce with custom carousel"
              link='https://ecom-rouge.vercel.app'
              />
            </motion.div>               


          <motion.div 
            variants={verticalIn}
            className="
              drop-shadow-[rgba(0,0,0,1)_0_10px_30px] filter
              overflow-hidden flex justify-self-stretch items-stretch
              rounded-2xl "
             >
            <ProjectCard 
              index="2"
              title="3D NFT Card"
              link='https://codepen.io/coding_anish/full/KKXeVbg'
              />
            </motion.div>               




          <motion.div 
            variants={verticalIn}
            className="
              drop-shadow-[rgba(0,0,0,1)_0_10px_30px] filter
              overflow-hidden flex justify-self-stretch items-stretch
              rounded-2xl "
             >
            <ProjectCard 
              index="3"
              title="Capsule Slider"
              link='https://codepen.io/coding_anish/full/bGadNpK'
              />
            </motion.div>               

          <motion.div 
            variants={verticalIn}
            className="
              drop-shadow-[rgba(0,0,0,1)_0_10px_30px] filter
              overflow-hidden flex justify-self-stretch items-stretch
              rounded-2xl "
             >
            <ProjectCard 
              index="4"
              title="Draggable Add Button"
              link='https://anishlab.vercel.app'
              />
            </motion.div>               


          <motion.div 
            variants={verticalIn}
            className="
              drop-shadow-[rgba(0,0,0,1)_0_10px_30px] filter
              overflow-hidden flex justify-self-stretch items-stretch
              rounded-2xl "
             >
            <ProjectCard 
              index="5"
              title="Navbar with follower"
              link='https://anishlab.vercel.app'
              />
            </motion.div>               




      </motion.section>
      </AnimatePresence>
    </main>
  )

}


export default Project
