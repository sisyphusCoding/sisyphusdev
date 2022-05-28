import React, { useState } from 'react'
import blog1 from './blog1.webp'



import Image from 'next/image'
interface Props {
  title:string,
  imagelink:any,
  link:string,
}

const Blogblock: React.FC<Props> = ({title,imagelink,link}) => {

  const [slide,setSlide] = useState<boolean>(false)

  return(
  <section
      onMouseEnter={()=>setSlide(true)}
      onMouseLeave={()=>setSlide(false)}
      className='
        inline-flex rounded-2xl
        relative overflow-x-hidden 
        shadow-[0_5px_40px_rgba(0,0,0,.7)]'
      >
    
      <span
        className="
        inline-block
        w-[60vmin] h-fit"
        >
        <Image
          objectFit='cover'
          height={600} width={1000}
          src={blog1} 
          layout="responsive" 
          alt='blog-image-header' />
      </span>  
  
    <div
      className={`
        ${slide? 'translate-x-0' : 'translate-x-full' } 
        transform-gpu px-4  will-change-transform
        transition-transform ease-linear duration-200 
        shadow-[-5px_0_10px_black]
        font-bold
        right-0 top-0 text-stone-800
        flex flex-col items-end justify-evenly 
        absolute h-full 
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
          <a href={link}>
              <h4>READ</h4>
          </a>
        </button>

      </div>

      

  </section>
  

  
)}



export default Blogblock
