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
import type { FontSpec } from 'chart.js';

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
          font: {
            size: 14,        // Font size
            family: 'Arial', // Font family
            style: 'normal', // Must be a valid style (normal, italic, oblique)
            weight: 700,     // Weight as a number
          } as Partial<FontSpec>, // Cast as Partial<FontSpec> to resolve the type error
        },
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
            size: 14, // Font size
            weight: 700, // Use a numeric value for the weight
          } as Partial<FontSpec>, // Cast as Partial<FontSpec> to resolve the type error
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
    <section id="skills" className="py-20 bg-base-300 rounded mb-10">
      <div className="container mx-auto text-center text-neutral-content">
        <h2 className="text-4xl font-bold mb-6">My Skills</h2>
        <p className="text-lg mb-8">
          A visual representation of my key technical skills and proficiencies.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className="w-full h-[300px] md:h-96 bg-neutral gap-4 mx-auto rounded">
          <Radar data={dataProLang} options={options} />
        </div>
        <div className="w-full h-[300px] md:h-96 bg-neutral gap-4 mx-auto rounded">
          <Radar data={dataTools} options={options} />
        </div>
        <div className="w-full h-[300px] md:h-96 bg-neutral gap-4 mx-auto rounded">
          <Radar data={dataDBs} options={options} />
        </div>
      </div>
    </section>
  );
};

export default SkillMatrix;
