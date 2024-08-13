import React, { useEffect, useState } from 'react'
import { Heart, HeartPulse, Search, SearchIcon, Soup } from 'lucide-react'
import { Receipecart } from '../Components/Receipecart'
import axios from 'axios'
import { getRandomColor } from '../utils/RandomColor'

const Home = () => {

  const APPID = "9d08b4fa"
  const APPKEY = "d3ea904b5aee079b3e7d37efd3abf765"

  const[receipe,setReceipe] = useState([])
  const[loading,setLoading] = useState(false)
  const[text,setText] = useState('Recommended Recipes')
  const[p,setP] =useState('popular choices')
  const fetchreceipe = async(searchQuery)=>{
    try {
      setLoading(true)
      const result =  await axios.get(`https://api.edamam.com/api/recipes/v2/?app_id=${APPID}&app_key=${APPKEY}&q=${searchQuery}&type=public`)
      const res = result.data;
      setReceipe(res.hits);
      console.log(res.hits);

      
    } catch (error) {
      console.log(error);
      
    }finally{
      setLoading(false)
    }

  }
    useEffect(()=>{
      fetchreceipe("chicken")
    },[])

    const HandleSearch = (e) =>{
      e.preventDefault();
      fetchreceipe(e.target[0].value)
      setText('Results for Your Search')
      setP('')
      }

  return (
    <div className='bg-[#faf9fb] p-10 flex-1'>
      <div className='max-w-screen-lg mx-auto'>

        <form onSubmit={HandleSearch}>


          <label htmlFor="" className='input shadow-md flex items-center gap-2'>
            <SearchIcon size={"24"} />
            <input type='text' className='text-sm md:text-md  grow ' placeholder="what do you want to cook today?"/>
          </label>


        </form>


        <h1 className='font-bold text-3x1 md:text-5xl mt-4'>{receipe.length > 0 ? text : ""}</h1>
        <h1 className='font-bold text-3x1 md:text-5xl mt-4'>{!loading && receipe.length == 0 && "No Results Found"}</h1>


        <p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight '>
         {p}
        </p>

      
            
          {receipe && (<div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    
          {!loading && receipe.map(({recipe},idx)=>(
            <Receipecart key = {idx} receipe = {recipe} {...getRandomColor()}/>
          ))}
          {loading && [...Array(9)].map((_,idx)=>
            (<div key={idx} className="flex w-52 flex-col gap-4">
           <div className="skeleton h-32 w-full"></div>
           <div className="skeleton h-4 w-28"></div>
           <div className="skeleton h-4 w-full"></div>
           <div className="skeleton h-4 w-full"></div>
           </div>))}
       </div>)}




      </div>
    </div>
  )
}

export default Home