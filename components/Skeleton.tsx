import React from "react";


const Skeleton: React.FC = () => {



  return(
      <div


          className="w-[50vmin] h-[29vmin] flex flex-col px-5 items-start justify-around bg-neutral-700 cursor-not-allowed"
          >
      <span className="motion-safe:animate-pulse rounded-full h-[8vmin] w-[8vmin] bg-neutral-500"></span> 
      
      <p className="motion-safe:animate-pulse w-full h-[1.5vmin] rounded-lg bg-neutral-500"></p>
       <p className="motion-safe:animate-pulse w-full h-[1.5vmin] rounded-lg bg-neutral-500"></p>
  <p className="motion-safe:animate-pulse w-full h-[1.5vmin] rounded-lg bg-neutral-500"></p>
      <p className="motion-safe:animate-pulse w-full h-[1.5vmin] rounded-lg bg-neutral-500"></p>
      </div>
  )


}


export default Skeleton
