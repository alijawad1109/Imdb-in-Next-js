'use client'
import React, { useEffect } from 'react'

export default function error({error,reset}) {
    useEffect(()=>{

    },[])
  return (
    <div className='text-center mt-10'>
      <h1>Something went wrong. Please try again.</h1>
      <button className='hover:text-amber-500 ' onClick={()=>reset()}>Try Again</button>
    </div>
  )
}
