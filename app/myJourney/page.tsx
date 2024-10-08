import React from 'react'
import Image from 'next/image'

const aboutme = () => {
  return (
    <div className='bg-base-300 mt-20 mb-10 md:px-10 rounded'>
      <div className='flex-row lg:flex justify-center'>
        <div className='flex justify-center order-1 lg:order-2 lg:w-2/5'>
          <Image src="/images/Nebiyou_Belaineh.jpg" alt="Nebiyou_Belaineh" width={400} height={400} className="w-[400px] h-[400px] object-cover mx-4"></Image>
        </div>
        <div className='w-full lg:w-3/5 px-6 text-center md:text-left md:py-8 order-2 lg:order-1 py-6'>
          <p className={"mt-4 text-2xl md:text-2xl font-bold text-base-content"}>
            From Biomedical Foundations to Software Innovation
          </p>

          {/* Body Text */}
          <p className="mt-6 text-lg md:text-xl text-base-content">
            Driven by my passion for Software Engineering, I made the leap from a successful career in Biomedical Engineering to focus on building and creating valuable products. My background provided me with a strong foundation in problem-solving and analytical thinking, and now I’m committed to growing my skills in software development, with a particular focus on web and mobile applications. Looking ahead, I’m also excited about exploring AI Engineering as a key area of interest. My goal is to leverage this unique blend of experience to deliver impactful solutions that make a real difference.
          </p>
        </div>
      </div>
    </div>
  )
}

export default aboutme