import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function NavbarItem({title,param}) {
    const searchParams= useSearchParams();
    const genre = searchParams.get('genre')
  return (
    <div>
      <Link className={`hover:text-amber-300 p-1  ${genre === param ? 'border-b-[3px] border-amber-300' : ' ' }`} href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}
