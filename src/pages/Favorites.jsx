import React from 'react'
import { getRandomColor } from '../utils/RandomColor';
import { Receipecart } from '../Components/Receipecart';

const Favorites = () => {

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

	return (
		<div className='bg-[#faf9fb] flex-1 p-10 min-h-screen'>
			<div className='max-w-screen-lg mx-auto'>
				<p className='font-bold text-3xl md:text-5xl my-4'>My Favorites</p>

				{favorites.length === 0 && (
					<div className='h-[80vh] flex flex-col items-center gap-4 '>
						<p className='font-bold text-red-600'>No Favorites</p>
					</div>
				)}

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{favorites.map((recipe) => (
						<Receipecart key={recipe.label} receipe={recipe} {...getRandomColor()} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Favorites