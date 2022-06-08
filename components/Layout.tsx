import React from "react";
import NavBar from "./NavBar";
import Head from 'next/head'
interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {

return(

  <div
      className="min-h-screen min-w-full bg-neutral-300 text-zinc-900 font-vonique"
    >


      <Head>
        <title>Anish Kanna</title>
        <meta name="description" content="Anish Kanna Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className=' 
         flex items-center justify-end absolute  
          top-0 right-0  '>  
           <NavBar />
      </section> 
      {children}
  </div>

)

}

export default Layout
