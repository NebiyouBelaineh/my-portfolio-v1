import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center'>
      <nav className='text-xl font-bold text-primary space-x-6'>
        <Link href={"/"}>Home</Link>
        <Link href={"/#projects"}>My Experience</Link>
        <Link href={"/#aboutme"}>About Me / My Journey</Link>
        <Link href={"/blog"}>My Blogs</Link>
      </nav>
    </div>
  )
}

export default Header