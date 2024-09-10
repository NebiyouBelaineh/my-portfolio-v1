"use client";
import Link from 'next/link'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  
  useEffect(() => {
    const handleMenuToggle = () => {
      const menu = document.getElementById('menu');
      menu?.classList.toggle('hidden');
    };

    const burgerIcon = document.getElementById('burgerIcon');
    burgerIcon?.addEventListener('click', handleMenuToggle);

    // Cleanup the event listener on component unmount
    return () => {
      burgerIcon?.removeEventListener('click', handleMenuToggle);
    };
  }, []);
  return (
    <>
      <div className='fixed flex sm:justify-center top-0 right-0 left-0 p-6 md:p-4 mb-4 border-b-2 border-gray-500 bg-blur backdrop-blur-lg'>
        <nav className='hidden sm:flex text-xl font-bold text-neutral-content space-x-6 rounded'>
          <Link className="p-2 rounded hover:bg-secondary hover:text-secondary-content"
            href={"/"}>Home</Link>
          <Link
            className="p-2 rounded border-primary hover:border-neutral hover:bg-secondary hover:text-secondary-content"
            href={"/#skills"}>
            My Skills
          </Link>
          <Link
            className="p-2 rounded border-primary hover:border-neutral hover:bg-secondary hover:text-secondary-content"
            href={"#projects"}>
            My Projects
          </Link>
          <Link
            className="p-2 rounded border-primary hover:border-neutral hover:bg-secondary hover:text-secondary-content"
            href={"/aboutme"}>
            My Journey
          </Link>
          <Link
            className="p-2 rounded border-primary hover:border-neutral hover:bg-secondary hover:text-secondary-content"
            href={"/blog"}>
            My Blogs
          </Link>
        </nav>
        <div className='block sm:hidden bg-opacity-50'>
          <MenuIcon id="burgerIcon" />
          <nav id="menu" className='hidden rounded sm:flex text-lg font-bold text-neutral-content bg-neutral'>
            <Link
              className="p-2 pl-4 block rounded border-b-4 border-primary hover:bg-secondary hover:text-secondary-content"
              href={"/"}>
              Home
            </Link>
            <Link
              className="p-2 pl-4 block rounded border-primary hover:bg-secondary hover:text-secondary-content"
              href={"/#skills"}>
              My Skills
            </Link>
            <Link

              className="p-2
             pl-4 
             block rounded border-primary hover:bg-secondary hover:text-secondary-content"
              href={"/#projects"}>
              My Projects
            </Link>
            <Link

              className="p-2
             pl-4 
             block rounded border-primary hover:bg-secondary hover:text-secondary-content"
              href={"/aboutme"}>
              My Journey
            </Link>
            <Link

              className="p-2
             pl-4 
             block rounded border-primary hover:bg-secondary hover:text-secondary-content"
              href={"/blog"}>
              My Blogs
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header