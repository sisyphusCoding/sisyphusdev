
import React, { useState } from 'react'

import Image from 'next/image'

import pro0 from './pro0.png'
import pro1 from './pro1.png'
import pro2 from './pro2.png'
import pro3 from './pro3.png'
import pro4 from './pro4.png'
import pro5 from './pro5.png'

interface Props {
  title:string,
  index:string,
  link:string,
}


  let projectlist = [pro0,pro1,pro2,pro3,pro4,pro5]

const ProjectCard: React.FC<Props> = ({title,index,link}) => {

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
          src={projectlist[index]} 
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
          <a href={link} target="_blank" rel='noreferrer'>
              <h4>Live link</h4>
          </a>
        </button>

      </div>

      

  </section>
  

  
)}



export default ProjectCard
