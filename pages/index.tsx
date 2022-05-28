import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Typed from 'react-typed'
import NavBar from '../components/NavBar'

import{motion,AnimatePresence} from 'framer-motion'

const Home: NextPage = () => {
  
  const skills:any[] = ['frontend' , 'UI|UX' , 'micro-interaction', 'webgl']

const top= {
    initial :{opacity:0},
    show: {opacity:1 , transition:{stiffness:40,type:'spring' ,delay:2 , }},
    exit:{opacity:0}
  } 

  const bottom= {
    initial :{x:-1000,opacity:0},
    show: {x:0,opacity:1 , transition:{stiffness:40,type:'spring' ,delay:2 , }},
    exit:{x:-100,opacity:0}
  }


  return (  
    <div className='
        overflow-hidden
         font-vonique
        min-h-screen min-w-full flex flex-col items-center justify-between'>
      <div
        className='
          px-5 text-zinc-900 bg-neutral-300
          flex grow w-full flex-col relative items-start justify-evenly'
        >      
        
      <motion.h2 
          className='
            bg-stone-200
            will-change-transform
            tracking-widest
            book relative rounded-2xl w-[45vmin] lg:w-[55vmin] h-[15vmin] flex items-center justify-center' >
          <span className='front absolute' >HELLO !</span>
          <span className='back absolute'>HALLO !</span>
        </motion.h2>  
      <h1 className='w-[100vmin] typed  tracking-wide' >   
        <Typed strings={['I&apos;m anish' , 'I&apos;m kanna' , 'Ich bin anish' , 'Ich bin kanna']}
            smartBackspace={true}  startDelay={2000}
            typeSpeed={120} loop backSpeed={50}/>
        </h1>
      
      </div>
<AnimatePresence exitBeforeEnter>
      <motion.section 
 
        variants={bottom}
        initial='initial' animate='show' exit='exit' 
        className='
        backdrop-filter backdrop-blur-lg 
        text-zinc-900  bg-[rgba(255,255,255,0.3)] 
          items-center justify-center flex gap-10' >
       {skills.map(skill=>(
          <h1 key={skill} className='w-fit px-[5vmin] whitespace-nowrap scrollCar' >{skill}</h1>
       ))}  
      </motion.section>  
</AnimatePresence>
   </div>
  )
}

export default Home
