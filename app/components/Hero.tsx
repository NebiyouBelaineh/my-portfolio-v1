import React from 'react';
import Image from 'next/image';
import ConsoleText from './ConsoleText';
import ContactModal from './ContactModal';

const Hero: React.FC = () => {

    return (
        <section id="hero" className="bg-base-300 mt-20 mb-10 py-20 md:px-10 rounded">

            <div className='flex-row lg:flex'>
                {/* Image Section */}
                <div className='flex justify-center lg:w-2/5 order-1 lg:order-2 px-6 md:px-0 mx-auto w-[60%]'>
                    <Image className="rounded min-w-[250px]" priority={true} alt="animated_coder" width={400} height={400} src={"/images/annimated-coder.jpg"} />
                </div>
                {/* Text Section */}
                <div className="w-full lg:w-3/5 mx-auto px-6 text-center lg:text-left md:py-8 order-2 lg:order-1">
                    <ConsoleText />
                    <div className="mt-8 space-x-4">
                        <p className='text-lg md:text-xl font-semibold text-base-content'>
                            Explore my journey from biomedical to tech, dive into my projects, or reach out to discuss how I can contribute to your team!
                        </p>
                        <a
                            href="#resume"
                            className="inline-block my-4 px-8 py-3 bg-primary text-primary-content text-lg font-semibold rounded-md shadow-md hover:scale-105 transition-colors"
                        >
                            View My Resume
                        </a>
                        <ContactModal />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
