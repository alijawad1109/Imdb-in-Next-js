import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill} from 'react-icons/bs';
import Link from 'next/link'
import { DarkMode } from './DarkMode';
export default function Header() {
  return (
    <div className='flex justify-around items-center  p-3'>
    <div className='flex gap-4'>
        <MenuItem title="Home" address="/" Icon={AiFillHome}/>
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill}/>
    </div>
    <div className='flex gap-3 items-center'>
    <DarkMode/>
    <Link href={'/'} >
        <div className='text-xl p-1 bg-amber-500 rounded-lg cursor-pointer'>IMDb</div>
    </Link>
        <div className='sm:inline hidden'>Clone</div>
    </div>
    </div>
  )
}
