"use client";
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const currentPath = usePathname();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleMenuToggle = () => {
      const menu = document.getElementById('menu');
      menu?.classList.toggle('hidden');
    };

    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById('menu');
      const burgerIcon = document.getElementById('burgerIcon');
      // Check if click is outside menu and burger icon
      if (menu && burgerIcon && !menu.contains(event.target as Node) && !burgerIcon.contains(event.target as Node)) {
        menu.classList.add('hidden');  // Hide menu if clicked outside
      }
    };

    const burgerIcon = document.getElementById('burgerIcon');
    burgerIcon?.addEventListener('click', handleMenuToggle);
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listeners on component unmount
    return () => {
      burgerIcon?.removeEventListener('click', handleMenuToggle);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className='fixed md:flex md:justify-center top-0 right-0 left-0 p-6 md:p-4 mb-4 border-b-2 border-gray-500 bg-blur backdrop-blur-lg z-10'>
        <nav className='hidden md:flex text-xl font-bold text-neutral-content space-x-6 rounded'>
          <Link className="p-2 rounded hover:bg-secondary hover:text-secondary-content"
            href={"/#hero"}>Home</Link>
          <Link
            className="p-2 rounded hover:border-neutral hover:bg-secondary hover:text-secondary-content"
            href={currentPath === "/" ? "#skills" : "/#skills"}>
            My Skills
          </Link>
          <Link
            className="p-2 rounded hover:border-neutral hover:bg-secondary hover:text-secondary-content"
            href={currentPath === "/" ? "#projects" : "/#projects"}>
            My Projects
          </Link>
          <Link
            className="p-2 rounded hover:border-neutral hover:bg-secondary hover:text-secondary-content"
            href={"/myJourney"}>
            My Journey
          </Link>
          <Link
            className="p-2 rounded hover:border-neutral hover:bg-secondary hover:text-secondary-content"
            href={"/blog"}>
            My Blogs
          </Link>
        </nav>
        <div id="burgerIcon" ref={menuRef} className='rounded flex md:hidden items-center absolute top-0 left-0 mt-2 ml-2 p-1 z-10 hover:bg-neutral hover:scale-110'>
          <MenuIcon />
        </div>
        <nav id="menu" className='hidden md:hidden rounded mt-4 md:flex text-lg font-bold text-neutral-content'>
          <Link
            className="p-2 pl-4 block rounded hover:bg-secondary hover:text-secondary-content"
            href={"/"}>
            Home
          </Link>
          <Link
            className="p-2 pl-4 block rounded hover:bg-secondary hover:text-secondary-content"
            href={"/#skills"}>
            My Skills
          </Link>
          <Link

            className="p-2
             pl-4 
             block rounded hover:bg-secondary hover:text-secondary-content"
            href={"/#projects"}>
            My Projects
          </Link>
          <Link

            className="p-2
             pl-4 
             block rounded hover:bg-secondary hover:text-secondary-content"
            href={"/myJourney"}>
            My Journey
          </Link>
          <Link

            className="p-2
             pl-4 
             block rounded hover:bg-secondary hover:text-secondary-content"
            href={"/blog"}>
            My Blogs
          </Link>
        </nav>
      </div>
    </>
  )
}

export default Header