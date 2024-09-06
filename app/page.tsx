import Image from "next/image";
import Hero from "./components/Hero";
import SkillMatrix from "./components/SkillMatrix";

export default function Home() {
  return (
    <>
      <section id="hero" className="bg-base-300 mt-20 mb-10 py-20 md:px-10 rounded">
        <Hero />
      </section>
      <section id="skills" className="py-20 bg-base-300 rounded">
        <div className="container mx-auto text-center text-neutral-content">
          <h2 className="text-4xl font-bold mb-6">My Skill Matrix</h2>
          <p className="text-lg mb-8">
            A visual representation of my key technical skills and proficiencies.
          </p>
          <SkillMatrix />
        </div>
      </section>
    </>
  );
}
