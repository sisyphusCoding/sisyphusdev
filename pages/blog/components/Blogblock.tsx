import React, { useState } from 'react'




import Image from 'next/image'
interface Props {
  title:string,
  index:string,
  link:string,
}

const Blogblock: React.FC<Props> = ({title,index,link}) => {

  const [slide,setSlide] = useState<boolean>(false)

  return(
  <section
      onMouseEnter={()=>setSlide(true)}
      onMouseLeave={()=>setSlide(false)}
      className='
          flex row items-stretch justify-center
        relative 
          
        '
      >
    
      <span
        className="
        inline-block
        w-[60vmin] h-fit"
        >
        <Image
          objectFit='cover'
          height={600} width={1000}
          src={`/./blog${index}.webp`} 
          layout="responsive" 
          alt='blog-image-header' />
      </span>  
  
    <div
      className={`
        ${slide? 'right-0 opacity-100' : ' -right-[100%] opacity-1' } 
        px-4  will-change-transform
        rounded-r-md
        transition-allease duration-700 
        font-bold
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
          <a href={link}>
              <h4>READ</h4>
          </a>
        </button>

      </div>

      

  </section>
  

  
)}



export default Blogblock
