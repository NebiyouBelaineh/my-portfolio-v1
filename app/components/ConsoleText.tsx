"use client";
import { useEffect, useRef, useState } from 'react';
import { Handjet } from 'next/font/google';

const handjet = Handjet({ subsets: ['latin'],
    weight: ['400', '700'],
 });

const ConsoleText = () => {
    const textRef = useRef<HTMLSpanElement>(null);
    const [visible, setVisible] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    // Function to handle the typing effect
    const consoleText = (words: string[], id: string, colors: string[]) => {
        if (colors === undefined) colors = ['#fff'];
        let letterCount = 1;
        let x = 1;
        let waiting = false;
        const target = textRef.current;

        if (target) {
            target.style.color = colors[0];
        }

        const interval = setInterval(() => {
            if (target) {
                if (letterCount === 0 && waiting === false) {
                    waiting = true;
                    target.innerHTML = words[0].substring(0, letterCount);
                    setTimeout(() => {
                        const usedColor = colors.shift();
                        if (usedColor) colors.push(usedColor);
                        const usedWord = words.shift();
                        if (usedWord) words.push(usedWord);
                        x = 1;
                        if (target) target.style.color = colors[0];
                        letterCount += x;
                        waiting = false;
                    }, 1000);
                } else if (letterCount === words[0].length + 1 && waiting === false) {
                    waiting = true;
                    setTimeout(() => {
                        x = -1;
                        letterCount += x;
                        waiting = false;
                    }, 1500);
                } else if (waiting === false) {
                    target.innerHTML = words[0].substring(0, letterCount);
                    letterCount += x;
                }
            }
        }, 120);

        return () => clearInterval(interval);
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);
    // UseEffect to run the animation on mount
    useEffect(() => {
        consoleText(
            ['Hello World.', 'My name is Nebiyou.', "I'm a Software Engineer."],
            'text',
            ['']
        );

        const underscoreInterval = setInterval(() => {
            setVisible((prevVisible) => !prevVisible);
        }, 600);

        return () => clearInterval(underscoreInterval);
    }, [isMounted]);

    return (
        <div className='console-container text-[2rem] h-[100px] lg:text-[3rem] lg:h-[150px]'>
            <span className='text-secondary font-bold font-serif text-left' ref={textRef} id="text"></span>
            <div
                id="console"
                className={`console-underscore ${visible ? '' : 'hidden'}`}
            >
                &#95;
            </div>
        </div>
    );
};

export default ConsoleText;
