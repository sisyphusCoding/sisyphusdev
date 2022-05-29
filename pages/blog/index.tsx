import React from "react";
import Blogblock from "./components/Blogblock";
import{motion,AnimatePresence} from 'framer-motion'
import Skeleton from "../../components/Skeleton";
import { secureHeapUsed } from "crypto";
import { exit } from "process";
const Blog = () => {

  const leftIn = {
    hidden: {x:-100,opacity:0},
    show:{x:0,opacity:1,transition:{staggerChildren:.3,type:'spring', delay:.4 , damping: 30}},
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
      className='        
        min-h-screen min-w-full 
        flex items-center flex-row '  
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
          <motion.h1 variants={innerText} >blog</motion.h1>
          </section>
      </motion.div>
      <motion.section
          variants={sectionWrap}
     initial='hidden' animate='show' exit='exit'
          className="
            flex px-10
            flex-row flex-wrap items-center justify-between
            min-h-screen border-2 border-black grow w-full"
          >
      <motion.div

        variants={verticalIn}
            className="overflow-hidden shadow-[rgba(0,0,0,1)_0_10px_40px] rounded-2xl inline-flex"
            >
      <Blogblock 
        index="1" 
        title='3D CSS - Introduction using Flip Card.'
        link="https://sisyphus.hashnode.dev/3d-css-introduction-using-flip-card"/>           
    </motion.div>
     <motion.div
        variants={verticalIn}
          className="overflow-hidden shadow-[rgba(0,0,0,1)_0_10px_40px] rounded-2xl inline-flex"
            >
            <Skeleton />
    </motion.div>
</motion.section>


</AnimatePresence>
</main>

  )
}


export default Blog
