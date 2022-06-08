import React, { useState } from 'react'

import Image from 'next/image'
import blog1 from './blog1.jpg'

interface Props {
  title:string,
  index:string,
  link:string,
}


  let blogpost = [blog1]

const Blogblock: React.FC<Props> = ({title,index,link}) => {

  const [slide,setSlide] = useState<boolean>(false)

  return(
  <section
      onMouseEnter={()=>setSlide(true)}
      onMouseLeave={()=>setSlide(false)}
      className='
          inline-flex row items-stretch justify-center
        relative 
          
        '
      >
    
      <div
        className="
         
        rounded-2xl

        inline-block w-[50vmin] "
        >
        <Image
          objectFit='cover'
          height={600} width={1100}
          src={blogpost[index]} 
          layout="responsive" 
          alt='blog-image-header' />
      </div>  
  
    <div
      className={`
        ${slide? 'right-0 opacity-100' : ' -right-[100%] opacity-1' } 
        px-4  will-change-transform
        transition-allease duration-700 
        font-bold rounded-r-2xl
        right-0 top-0 text-stone-800
        flex flex-col items-end justify-evenly 
        absolute h-full w-fit 
        bg-[rgba(255,255,255,.4)] backdrop-brightness-50 backdrop-filter backdrop-blur-md `}
      >  
      <h4 
        className='max-w-xs text-right tracking-widest' 
          >{title}</h4>
       <button
        className=' tracking-widest
          transition-all ease duration-300
          text-stone-100 hover:text-[rgba(0,0,0,.6)]
          hover:bg-[rgba(255,255,255,.4)]
          px-6 py-2 rounded-2xl
          bg-[rgba(0,0,0,.6)] '  
        >
          <a href={link}
           target='_blank'
            rel='noreferrer'
            >
              <h5>READ</h5>
          </a>
        </button>

      </div>

      

  </section>
  

  
)}



export default Blogblock
