import nav from '../styles/nav.module.sass'
import Link  from 'next/link'

import { useState } from 'react'

import { useRouter } from 'next/router';

import { motion  , AnimatePresence } from 'framer-motion'


import NextLink from 'next/link'
import { style } from 'canvas-sketch-util/color';


const variants = {
  open: { opacity: 1, y: 0  , display: 'flex' },
  
  closed: { opacity:0 ,y: 100},


out: {display:'none',
  transition: {delay: 1 }
}


  

}



const Navbar = () => {

  const router = useRouter()

  


  

  const [menu , setMenu] = useState(false)


  const navi = ['home', 'work', 'about', 'blog']


  return (
    <div className={nav.wrapper} >

      <section className={nav.menu} onClick ={()=> {setMenu(!menu)}} style={menu? {boxShadow: '0 0 4vh -.8vh rgba(0,0,0,.6)'} : {boxShadow: '0 0 4vh -.8vh rgba(0,0,0,0)' } }  >
      <div style={menu ? {transform: 'rotate(235deg)' , top: '45%'} : {transform: 'rotate(0)' , top: '1.25vh'}  } ></div>
      <div style={menu ? { opacity: '0' , scale: '0'}: {opacity: '1' ,scale: '1'}} ></div>
      <div style={menu ? {transform: 'rotate(-235deg) translate3d(0,0,2vh)' , top: '45%' } : {transform: 'rotate(0) translate3d(0,0,2vh)' , bottom: '1.25vh'}  } ></div>
      </section>
    
      <motion.section   
      animate={menu ? "open" : ["closed" , "out"] }
      variants={variants}
      className={nav.linkWrap}   >

              <Link href="/">
                    <a passHref className={nav.navItem}  
                    onClick ={()=> {setMenu(!menu)}} 
                      style ={router.pathname == "/" ? {color: '#50D890' , fontWeight: 'bolder' , transform : 'perspective(30rem)  rotateX(45deg) translate3d(0,0,2rem)'  } : {color: 'hsl(40, 25%, 83%)' , fontWeight: 'normal' , transform : ' perspective(30rem) rotateX(0) translate3d(0,0,2rem)'   } }
                    >
                        home
                    </a>
              </Link>

              <Link href="/work">
                    <a passHref className={nav.navItem}  
                    onClick ={()=> {setMenu(!menu)}} 
                      style ={router.pathname == "/work" ? {color: '#50D890' , fontWeight: 'bolder' , transform : 'perspective(30rem)  rotateX(45deg) translate3d(0,0,2rem)'  } : {color: 'hsl(40, 25%, 83%)' , fontWeight: 'normal' , transform : ' perspective(30rem) rotateX(0) translate3d(0,0,2rem)'   } }
                    >
                        work
                    </a>
              </Link>

              <Link href="/about">
                    <a passHref  className={nav.navItem}  
          
          onClick ={()=> {setMenu(!menu)}} 
                      style ={router.pathname == "/about" ? {color: '#50D890' , fontWeight: 'bolder' , transform : 'perspective(30rem)  rotateX(45deg) translate3d(0,0,2rem)'  } : {color: 'hsl(40, 25%, 83%)' , fontWeight: 'normal' , transform : ' perspective(30rem) rotateX(0) translate3d(0,0,2rem)'   } }
                    
                    >
                        about
                    </a>
              </Link>

              <Link href="/blog">
                    <a passHref  className={nav.navItem} 
                    onClick ={()=> {setMenu(!menu)}} 
                     style ={router.pathname == "/blog" ? {color: '#50D890' , fontWeight: 'bolder' , transform : 'perspective(30rem)  rotateX(45deg) translate3d(0,0,2rem)'  } : {color: 'hsl(40, 25%, 83%)' , fontWeight: 'normal' , transform : ' perspective(30rem) rotateX(0) translate3d(0,0,2rem)'   } }   >
                        blog
                    </a>
              </Link>
      
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



