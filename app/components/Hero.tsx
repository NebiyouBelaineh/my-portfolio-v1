// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="bg-base-200 py-20">
            <div className="container mx-auto px-6 text-center md:text-left">
                {/* Headline */}
                <h1 className="text-4xl md:text-5xl font-bold text-netural-content">
                    Hi, my name is Nebiyou. I am a Software Engineer.
                </h1>

                {/* Subheadline */}
                <p className="mt-4 text-xl md:text-2xl text-base-content">
                    Engineering the Future: From Biomedical Foundations to Software Innovation
                </p>

                {/* Body Text */}
                <p className="mt-6 text-lg md:text-xl text-base-content">
                    Driven by my passion for Software Engineering, I made the leap from a successful career in Biomedical Engineering to focus on building and creating valuable products. My background provided me with a strong foundation in problem-solving and analytical thinking, and now I’m committed to growing my skills in software development, with a particular focus on web and mobile applications. Looking ahead, I’m also excited about exploring AI Engineering as a key area of interest. My goal is to leverage this unique blend of experience to deliver impactful solutions that make a real difference.
                </p>

                {/* Call to Action */}
                <div className="mt-8 space-x-4">
                    <a 
                        href="#resume" 
                        className="inline-block px-8 py-3 bg-primary text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors"
                    >
                        View My Resume
                    </a>
                    <a 
                        href="#contact" 
                        className="inline-block px-8 py-3 bg-secondary text-gray-800 text-lg font-semibold rounded-md shadow-md hover:bg-gray-400 transition-colors"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
