import React from "react";
import Blogblock from "./components/Blogblock";
import{motion,AnimatePresence} from 'framer-motion'
const Blog = () => {

  const leftIn = {
    hidden: {x:-200,opacity:0},
    show:{x:0,opacity:1,transition:{staggerChildren:.3,type:'spring', delay:.4 , damping: 100}},
    opacity:{x:200,opacity:0}
  }


  const innerText = {
    hidden:{x:200 , opacity:0},
    show:{x:0, opacity: 1,
      transition:{
        duration:1.5, type:'spring' ,delay:1 , damping: 100
      }
      }
  }

  const verticalIn = {
    hidden:{y:200 , opacity:0},
    show:{y:0, opacity: 1,
      transition:{
        duration:1.5, type:'spring' ,delay:1 , damping: 100
      }
      }, 
    exit:{y:200 , opacity:0},

  }

  return(
<AnimatePresence exitBeforeEnter>   
      <main
      className='        
        min-h-screen min-w-full 
        flex items-center flex-row '  
      >
      <motion.div
        className="vertical"
        variants={leftIn}
        initial='hidden' animate='show' exit='exit'
        >  
          <section
              className="overflow-hidden"
              >
          <motion.h1 variants={innerText} >Blog</motion.h1>
          </section>
      </motion.div>
      <motion.section

        variants={verticalIn}
        initial='hidden' animate='show' exit='exit'
          className="
            flex
            flex-row flex-wrap items-center justify-center
            min-h-screen grow w-full"
          >
      <div
          className="overflow-hidden shadow-[rgba(0,0,0,1)_0_10px_40px] rounded-2xl inline-flex"
            >
      <Blogblock 
        index="1" 
        title='3D CSS - Introduction using Flip Card.'
        link="https://sisyphus.hashnode.dev/3d-css-introduction-using-flip-card"/>
    </div>
</motion.section>
    </main>
</AnimatePresence>

  )
}


export default Blog
