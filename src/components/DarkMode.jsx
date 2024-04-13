'use client'
import React from 'react'
import {MdLightMode,MdDarkMode} from 'react-icons/md';
import {useTheme} from 'next-themes'
export const DarkMode = () => {
  const {theme,setTheme,systemTheme}= useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <div>
      {currentTheme === 'dark' ? 
      <MdLightMode className='hover:text-amber-500 text-xl cursor-pointer' onClick={()=>setTheme('light')}/> : <MdDarkMode className='hover:text-amber-500 text-xl cursor-pointer' onClick={()=>setTheme('dark')} />
      }
    </div>
  )
}
