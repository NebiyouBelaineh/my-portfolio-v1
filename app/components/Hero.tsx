import React from 'react';
import Image from 'next/image';
import ConsoleText from './ConsoleText';

const Hero: React.FC = () => {

    return (
        <section id="hero" className="bg-base-200 py-16 md:p-20 flex">
            <div className="w-3/5 mx-auto px-6 text-center md:text-left md:py-8">
                {/* Headline */}
                <ConsoleText />
                {/* Subheadline */}
                

                {/* Call to Action */}
                <div className="mt-8 space-x-4">
                    <p className='text-lg md:text-xl font-semibold text-base-content text-justify'>
                        Explore my journey from biomedical to tech, dive into my projects, or reach out to discuss how I can contribute to your team!
                    </p>
                    <a
                        href="#resume"
                        className="inline-block my-4 px-8 py-3 bg-primary text-primary-content text-lg font-semibold rounded-md shadow-md hover:scale-105 transition-colors"
                    >
                        View My Resume
                    </a>
                    <a
                        href="#contact"
                        className="inline-block mb-4 px-8 py-3 bg-accent text-accent-content text-lg font-semibold rounded-md shadow-md hover:scale-105 transition-colors"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
            <div className='w-2/5'>
                <Image alt="Nebiyou_Belaineh" width={600} height={600} src={"/profile/Nebiyou_Belaineh.jpg"} />
            </div>
        </section>
    );
};

export default Hero;
