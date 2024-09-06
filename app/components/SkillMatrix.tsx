"use client";
import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the necessary chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SkillMatrix: React.FC = () => {
    const dataProLang = {
        labels: ['JavaScript', 'TypeScript', 'Python', 'C', 'Bash'],
        datasets: [
            {
                label: 'Programming Languages Proficiency',
                data: [85, 80, 90, 70, 70], // Skill levels (out of 100)
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Radar chart fill color
                borderColor: '#FABC3F', // Line color
                borderWidth: 2, // Line thickness
                pointBackgroundColor: 'rgba(0, 0, 0, 1)', // Point color
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)', // Hover effect
            },
        ],
    };
    const dataTools = {
        labels: ['React Js', 'Next Js', 'Node.js', 'Flask', 'Express Js'],
        datasets: [
            {
                label: 'Frameworks Proficiency',
                data: [75, 70, 85, 80, 80], // Skill levels (out of 100)
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Radar chart fill color
                borderColor: '#FF8225', // Line color
                borderWidth: 2, // Line thickness
                pointBackgroundColor: 'rgba(0, 0, 0, 1)', // Point color
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)', // Hover effect
            },
        ],
    };
    const dataDBs = {
        labels: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB'],
        datasets: [
            {
                label: 'Databases Proficiency',
                data: [60, 85, 75, 85], // Skill levels (out of 100)
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Radar chart fill color
                borderColor: '#FAB8B8', // Line color
                borderWidth: 2, // Line thickness
                pointBackgroundColor: 'rgba(0, 0, 0, 1)', // Point color
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)', // Hover effect
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    boxWidth: 20,
                    color: '#fff', // Label text color
                    padding: 20,
                    // usePointStyle: true,
                    font: {
                        size: 14,        // Change the font size
                        family: 'Arial', // Change the font family
                        style: 'normal', // Change the font style (normal, italic, oblique)
                        weight: 'bold',  // Change the font weight (normal, bold, etc.)
                    },
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Tooltip background color
                titleColor: '#fff', // Title color in the tooltip
                bodyColor: '#fff', // Body text color in the tooltip
                callbacks: {
                    label: function (context: any) {
                        return `${context.label}: ${context.raw}% proficiency`;
                    },
                },
            },

        },
        scales: {
            r: {
                angleLines: {
                    display: true,
                    color: '#597445', // Change the web spokes color (center to label lines)
                    lineWidth: 2, // Adjust the thickness of the spokes
                },
                pointLabels: {
                    color: 'white', // Color for the skill labels (JavaScript, TypeScript, etc.)
                    font: {
                        size: 14, // You can also change the font size here
                        weight: 'normal', // Customize font weight
                    },
                },
                grid: {
                    color: '#597445', // Change the gridline color (concentric circles)
                    lineWidth: 2, // Adjust the thickness of the gridlines
                },
                suggestedMin: 0,
                suggestedMax: 100,
                ticks: {
                    stepSize: 20, // Scale steps
                    color: 'white', // Color of the labels (100, 80, 60, etc.)
                    backdropColor: 'rgba(173, 255, 173, 0.1)', // Background color behind the labels

                },
            },
        },
    };

    return (
        <div className='flex flex-col md:flex-row justify-center'>
            <div className="w-full h-[200px] md:w-[50%] md:h-96 bg-neutral my-4 mx-auto md:mx-4">
                <Radar data={dataProLang} options={options} />
            </div>
            <div className="w-full h-[200px] md:w-[50%] md:h-96 bg-neutral my-4 mx-auto md:mx-4">
                <Radar data={dataTools} options={options} />
            </div>
            <div className="w-full h-[200px] md:w-[50%] md:h-96 bg-neutral my-4 mx-auto md:mx-4">
                <Radar data={dataDBs} options={options} />
            </div>
        </div>
    );
};

export default SkillMatrix;
