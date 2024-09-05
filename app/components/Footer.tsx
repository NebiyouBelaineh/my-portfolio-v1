import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import CodeIcon from '@mui/icons-material/Code';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 md:p-16">
      <aside>
      <CodeIcon className='text-3xl'/>
        <p className='text-xl'>
          Nebiyou Belaineh
        </p>
        <p>@Copyright {year}</p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
        <a href='https://github.com/NebiyouBelaineh' target="_blank" rel="noreferrer">
          <GitHubIcon/>
          </a>
          <a href='https://www.linkedin.com/in/nebiyou-belaineh-2a683415b/' target="_blank" rel="noreferrer">
            <LinkedInIcon/>
          </a>
          <a href='https://x.com/SeifuNebiyou' target="_blank" rel="noreferrer">
          <XIcon/>
          </a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer