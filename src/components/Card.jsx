import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FiThumbsUp} from 'react-icons/fi'
export default function Card({result}) {
  return (
    <div className='sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-300 sm:m-2'>
      <Link href={`/movie/${result.id}`}>
       <Image  src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}width={500} height={300} className=' h-[250px] object-cover rounded-lg'/>
          <div className='p-2'>
            <p className='text-sm line-clamp-3'>{result.overview}</p>
            <h1 className='truncate font-semibold text-lg'>{result.title || result.orignal_title || result.name}</h1>
            <div className='flex gap-2 items-center'>
            <p className='text-sm'>{result.release_date || result.first_air_date}</p>
            <FiThumbsUp/>
            {result.vote_count}
            </div>
          </div>
      </Link>
    </div>
  )
}
