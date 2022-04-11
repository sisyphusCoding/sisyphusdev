import '../styles/global.sass'

import globe from '../styles/global.sass'


import Layout from '../component/Layout'


import {motion , AnimatePresence} from 'framer-motion'



function MyApp({ Component, pageProps , router }) {



  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -200 },
  }


  return (
    <Layout>
      <div className={globe.follow}>
        <div id='#circle1' ></div>
        <div id='#circle2' ></div>
      </div>
       <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition = {{
          type : 'spring',
          stiffness: 100,
          staggerChildren: 0.5,
        }}
      >
         <Component {...pageProps} />
       </motion.div> 
      </AnimatePresence>
      
    </Layout>

  )

   
}

export default MyApp
