import { Heart, Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react'

const Sidebar = () => {
  return (
    <>
    <Desktopview />
    <Mobileview />
    </>
  )
}

export default Sidebar

const Desktopview = () =>{

    return(
    <div className='p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block'>
        <div className='flex flex-col gap-20 sticky top-10 left-0 '>
            <div className='w-full '>
            <img src="/sanji.png" alt="" className='hidden md:block size-40' />
            <img src="/pngaaa.com-522585.png" alt="" className='block md:hidden' />
            </div>
            <ul className='flex flex-col items-center md:items-start gap-8'>
                <Link to ={'/'} className='flex gap-1'>
                    <Home size={24}/>
                    <span className='font-bold hidden md:block'>
                      HOME
                    </span>
               </Link>
               <Link to ={'/favorites'} className='flex gap-1'>
                    <Heart size={24} />
                    <span className='font-bold hidden md:block'>
                      FAVORITES
                    </span>
               </Link>
            </ul>
        </div>
    </div>
    )
}

const Mobileview = () =>{
    return (
    <div className='flex justify-center gap-10 border-t w-full bottom-0 left-0 fixed bg-white z-10 sm:hidden '>
        <Link to ={'/'} >
        <Home size={24} className='cursor-pointer'/>
            
         </Link>
        <Link to ={'/favorites'} >  

          <Heart size={24} className='cursor-pointer'/>
            
        </Link>
  
        
    </div>
    )
}