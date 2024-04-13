'use client'
import React from 'react'
import NavbarItem from './NavbarItem'
export default function Navbar() {

  return (
    <div className='bg-amber-100  dark:bg-gray-600 flex justify-center items-center gap-4  p-4'>
      <NavbarItem title="Trending" param="fetchTrending"/>
      <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
