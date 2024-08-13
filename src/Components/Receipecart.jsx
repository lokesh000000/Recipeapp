import { Heart, HeartPulse, SoupIcon } from 'lucide-react'
import React from 'react'
import { useState } from 'react';

export const Receipecart = ({receipe,bg,badge}) => {

  const [isFavorite, setIsFavorite] = useState(localStorage.getItem("favorites")?.includes(receipe.label));
  const HandleFavorites =()=>{

    let Favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const alreadyfavorite = Favorites.some((fav)=> fav.label == receipe.label);
    if(alreadyfavorite){
      Favorites = Favorites.filter((fav)=> fav.label !== receipe.label); 
      setIsFavorite(false);
    }else{
      Favorites.push(receipe);
      setIsFavorite(true);
    }
    localStorage.setItem("favorites", JSON.stringify(Favorites));
  };

  return (

    <div className={ `flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}>

    <a 	href={`https://www.youtube.com/results?search_query=${receipe.label} recipe`}
	    target='_blank'
       className='relative h-32'>

      <div className='skeleton absolute inset-0' />
      <img src= {receipe.image} alt="" className='rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500'
      onLoad={(e) => {
        e.currentTarget.style.opacity = 1;
        e.currentTarget.previousElementSibling.style.display = "none";}}
      />
      <div className='absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm'>
        <SoupIcon size={16} />{receipe.yield} servings
      </div>
     <div   onClick={(e)=>{
      e.preventDefault();
        HandleFavorites();}}  className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer'>
      {!isFavorite && <Heart size={20} className='hover:fill-red-500 hover:text-red-500' />}
      {isFavorite && <Heart size={20} className='fill-red-500 text-red-500' />}
     </div>
    </a>
    <div className='flex mt-1'>
      <p className='font-bold tracking-wide'>{receipe.label}</p>
    </div>
    <p className='my-2'>
      {receipe.cuisineType[0].charAt(0).toUpperCase() + receipe.cuisineType[0].slice(1)} Kitchen</p>
    <div className='flex gap-2 mt-2' >
      <div className={`flex  gap-1 ${badge} items-center p-1 rounded-md`}>
        <HeartPulse size={16} />
        <span className='text-sm font-semibold tracking-tighter'>{receipe.healthLabels[0] }</span>  
       </div>
      <div className={`flex  gap-1 ${badge} items-center p-1 rounded-md`}>
      <HeartPulse size={16} />
      <span className='text-sm font-semibold tracking-tighter'>{receipe.healthLabels[1]}</span>  
      </div>
    </div>

    </div>

  )
}
