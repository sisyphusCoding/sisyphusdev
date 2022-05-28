import React from "react";
import Blogblock from "./components/Blogblock";

import Image from 'next/image'
const Blog = () => {
  return(

    <main
      className='
        shadow-2xl
        px-8 
        min-h-screen min-w-full 
        flex items-start justify-evenly flex-col '  
      >
      <h1>Blog</h1>
      

      <Blogblock 
      
        title='3D CSS - Introduction using Flip Card.'
        link="https://sisyphus.hashnode.dev/3d-css-introduction-using-flip-card"/>

    </main>

  )
}


export default Blog
