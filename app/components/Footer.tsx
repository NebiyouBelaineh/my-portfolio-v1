import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import CodeIcon from '@mui/icons-material/Code';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <aside>
      <CodeIcon/>
        <p className='text-xl'>
          Nebiyou Belaineh
        </p>
        <p>@Copyright {year}</p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
        <a href='#'>
          <GitHubIcon/>
          </a>
          <a href='#'>
            <LinkedInIcon/>
          </a>
          <a href='#'>
          <XIcon/>
          </a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer