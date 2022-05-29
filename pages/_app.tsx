import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'


import dynamic from 'next/dynamic'
import Layout from '../components/Layout'

import {motion,AnimatePresence} from 'framer-motion'
import {useRouter} from 'next/router'


function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()


  const wrapperAnima = {


    hidden: {y:50,opacity:0} ,


    show: 
    {
       x:0,y:0,opacity:1,
      transition:{type:'spring', staggerChildren:.25, delayChildren : .37  } } ,


    exit : {
        y:1000,opacity:0,
        transition:{type:'spring' ,stiffness:50,damping:20, staggerChildren : .2 ,staggerDirection: -1 ,delay:2.1 , duration:1 } } ,

  }



  return(
        <Layout>     

        <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          className='origin-bottom'
          variants={wrapperAnima}
          initial='hidden' animate='show' exit='exit'
          >
          <Component {...pageProps} />
         </motion.div>
</AnimatePresence>
        </Layout>

    )
}

export default MyApp
