import React from 'react'
import { GitHub, LinkedIn, X, Code } from '@mui/icons-material';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 md:p-16">
      <aside>
      <Code className='text-3xl'/>
        <p className='text-xl font-bold'>
          Nebiyou Belaineh
        </p>
        <p>@Copyright {year}</p>
      </aside>
      <nav>
        <h6 className="text-xl font-bold uppercase">Social</h6>
        <div className="grid grid-flow-col gap-4">
        <a href='https://github.com/NebiyouBelaineh' target="_blank" rel="noreferrer">
          <GitHub/>
          </a>
          <a href='https://www.linkedin.com/in/nebiyou-belaineh-2a683415b/' target="_blank" rel="noreferrer">
            <LinkedIn/>
          </a>
          <a href='https://x.com/SeifuNebiyou' target="_blank" rel="noreferrer">
          <X/>
          </a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer