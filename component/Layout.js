import React from 'react'

import Navbar from './Navbar'

import layout from '../styles/layout.module.sass'


const Layout = ({children , router}) => {

  

  return (
      <div className={layout.bodyWrap} >
          <section className={layout.nav} >
          <Navbar  />
           </section>
          <section className={layout.content} >
            <main>{children}</main>
           </section>  
    </div>
  )
}

export default Layout